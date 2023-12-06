import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment-timezone";

const ElapsedTimeTimer = ({ utcTimestamp, color = "white" }: any) => {
  const [elapsedTime, setElapsedTime] = useState("");
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const kolkataTimestamp = moment(utcTimestamp).tz("Asia/Kolkata");
      const currentKolkataTime = moment().tz("Asia/Kolkata");
      const elapsedDuration = currentKolkataTime.diff(
        kolkataTimestamp,
        "seconds"
      );
      setElapsedTime(formatElapsedTime(Math.abs(elapsedDuration)));

      // Check if elapsed time is greater than 20 minutes

      if (Math.abs(elapsedDuration) <= 1200) {
        setIsRed(true); // 1200 seconds = 20 minutes
      } else {
        setIsRed(false); // 1200 seconds = 20 minutes
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [utcTimestamp]);

  const formatElapsedTime = (timeInSeconds: any) => {
    const duration = moment.duration(timeInSeconds, "seconds");
    const years = duration.years();
    const months = duration.months();
    const weeks = duration.weeks();
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
    if (weeks > 0) {
      timeParts.push(`${weeks}W`);
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

    return timeParts.join(" ");
  };

  return (
    <View style={styles.container}>
      {elapsedTime ? (
        <>
          <Icon name="clock-o" size={20} color={isRed ? "red" : color} />
          <Text
            style={[
              styles.timer,
              {
                color: isRed ? "red" : color,
                fontSize: 14,
                fontFamily: "Poppins-Medium",
              },
            ]}
          >
            {elapsedTime}
          </Text>
          {/* {isRed ? "": } */}
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  timer: {
    fontSize: 13,
    marginLeft: 8,
  },
});

export default ElapsedTimeTimer;
