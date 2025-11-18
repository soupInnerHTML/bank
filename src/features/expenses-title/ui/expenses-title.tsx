import React, { useMemo } from 'react';
import { View } from 'react-native';
import { styles } from './expenses-title.styles.ts';
import { categories } from '@entities/categories/lib';
import { Text } from '@shared/ui/text';

export const ExpensesTitle = () => {
  const totalExpenses = useMemo(() => {
    return categories.reduce((acc, category) => acc + category.expenses, 0);
  }, [categories]);
  return (
    <View style={styles.expensesTitleContainer}>
      <View style={styles.expensesTitle}>
        <Text style={styles.title}>
          Expenses in <Text style={styles.month}>June</Text>
        </Text>
        <Text style={styles.expense}>$5,091</Text>
      </View>
      <View style={styles.segments}>
        {categories.map(category => (
          <View
            key={category.id}
            style={[
              styles.segment,
              {
                backgroundColor: category.color,
                width: `${(category.expenses / totalExpenses) * 100}%`,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};
