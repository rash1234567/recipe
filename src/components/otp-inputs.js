import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

const OtpInput = ({ length = 6, onOtpChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Pass the updated OTP to the parent component
    if (onOtpChange) {
      onOtpChange(newOtp.join(""));
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0) {
      // Move focus to the previous input on Backspace
      inputs[index - 1].focus();
    }
  };

  const inputs = Array(length)
    .fill(0)
    .map((_, index) => (
      <TextInput
        key={index}
        style={styles.input}
        value={otp[index]}
        onChangeText={(value) => handleOtpChange(index, value)}
        keyboardType="numeric"
        maxLength={1}
        secureTextEntry={true}
        onKeyPress={(e) => handleKeyPress(e, index)}
        ref={(input) => (inputs[index] = input)}
      />
    ));

  return <View style={styles.container}>{inputs}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 5,
  },
});

export default OtpInput;
