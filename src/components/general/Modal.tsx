import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-paper';
import Modal from 'react-native-modal';

const OtpModal = ({visible, onClose, otp}) => {
  const handleOkPress = () => {
    onClose();
    // Handle OTP validation logic here
    // You can compare the entered OTP (enteredOtp) with the expected OTP (otp) here
  };

  return (
    <Modal isVisible={visible} onDismiss={onClose} style={styles.modalContent}>
      <Card>
        <Card.Title title={'Your OTP to start the safe trip is'} />
        <Card.Title title={`${otp}`} />
        <Card.Actions>
          <Button onPress={handleOkPress}>OK</Button>
        </Card.Actions>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  input: {
    marginBottom: 16,
  },
});

export default OtpModal;
