/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can choose a different icon library if you prefer

const NoRecordsFound = ({message}: any) => {
  return (
    <View style={styles.container}>
      <Icon name="error" size={50} color="#00AE5A" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    fontWeight: '700',
  },
});

export default NoRecordsFound;
