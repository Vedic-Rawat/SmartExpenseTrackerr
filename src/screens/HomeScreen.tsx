// src/screens/HomeScreen.tsx

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function HomeScreen({ navigation }: any) {
  const expenses = useSelector((state: RootState) => state.expenses);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Expense Tracker</Text>
      <Button title="Add Expense" onPress={() => navigation.navigate('AddExpense')} />
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{item.title}</Text>
            <Text>${item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  expenseItem: {
    padding: 10,
    backgroundColor: '#eee',
    marginTop: 10,
    borderRadius: 5,
  },
});
