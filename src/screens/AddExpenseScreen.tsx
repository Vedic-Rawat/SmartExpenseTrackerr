// src/screens/AddExpenseScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expenseSlice';
import { v4 as uuidv4 } from 'uuid';

export default function AddExpenseScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addExpense({
        id: uuidv4(),
        title,
        amount: parseFloat(amount),
        date: new Date().toISOString(),
      })
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Expense Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Add Expense" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  label: { marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
