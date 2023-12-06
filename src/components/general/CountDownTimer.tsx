import React, {useState, useEffect, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment-timezone';

const CountdownTimer = ({utcTimestamp, onNegative}: any) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isNegative, setIsNegative] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const [dynamicTime, setDynamicTime] = useState('');

  useEffect(() => {
    const kolkataTimestamp = moment(utcTimestamp).tz('Asia/Kolkata');
    const currentKolkataTime = moment().tz('Asia/Kolkata');

    // Calculate the initial duration in seconds by finding the difference between the Kolkata timestamp
    // and the current time
    const initialDuration = kolkataTimestamp.diff(
      currentKolkataTime,
      'seconds',
    );

    if (initialDuration < 0) {
      onNegative();
      setTextColor('black');
      setDynamicTime('');
      setIsNegative(true);
      setRemainingTime(0); // Set remaining time to 0
    } else {
      setIsNegative(false);
      setRemainingTime(Math.abs(initialDuration));
    }

    const interval = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(interval); // Stop the counter if it reaches 0
          const currentDuration = moment()
            .tz('Asia/Kolkata')
            .diff(kolkataTimestamp, 'seconds');
          setRemainingTime(currentDuration); // Set remaining time to the current duration
          return currentDuration;
        }

        if (prevTime <= 1200) {
          // If remaining time is 20 minutes or less, start showing dynamic time
          setTextColor('red');
          setDynamicTime(formatDynamicTime(prevTime));
        } else {
          setDynamicTime('');
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [utcTimestamp]);

  // Function to format dynamic time (years, months, days, hours, minutes, or seconds)
  const formatDynamicTime = (timeInSeconds: any) => {
    const duration = moment.duration(timeInSeconds, 'seconds');
    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    const timeParts = [];

    if (years > 0) {
      timeParts.push(`${years}y`);
    }
    if (months > 0) {
      timeParts.push(`${months}M`);
    }
    if (days > 0) {
      timeParts.push(`${days}d`);
    }
    if (hours > 0) {
      timeParts.push(`${hours}h`);
    }
    if (minutes > 0) {
      timeParts.push(`${minutes}m`);
    }
    if (seconds > 0 || timeParts.length === 0) {
      timeParts.push(`${seconds}s`);
    }

    return timeParts.join(' ');
  };

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <View style={styles.container}>
      {isNegative && dynamicTime ? (
        <>
          <Icon name="clock-o" size={20} color={textColor} />
          <Text style={[styles.timer, {color: textColor}]}>
            {isNegative ? '-' : ''}
            {dynamicTime ? dynamicTime : ''}
            {dynamicTime && (minutes >= 0 || seconds >= 0) ? ' ' : ''}
          </Text>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timer: {
    fontSize: 13,
    marginLeft: 8,
  },
});

export default memo(CountdownTimer);
