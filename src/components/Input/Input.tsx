import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from "./Input.style"

export default function Input({placeholder, onChange, value}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </View>
  )
}