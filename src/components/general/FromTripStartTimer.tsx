import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment-timezone";

const FromTripStartTimer = ({ utcTimestamp }: any) => {
  const [elapsedTime, setElapsedTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const kolkataTimestamp = moment(utcTimestamp).tz("Asia/Kolkata");
      const currentKolkataTime = moment().tz("Asia/Kolkata");
      const elapsedDuration = currentKolkataTime.diff(
        kolkataTimestamp,
        "seconds"
      );
      setElapsedTime(formatElapsedTime(elapsedDuration));
    }, 5000);

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
          <Icon name="clock-o" size={20} color={"red"} />
          <Text style={styles.timer}>{elapsedTime}</Text>
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
    color: "red",
  },
});

export default FromTripStartTimer;
