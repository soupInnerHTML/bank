import React from 'react';
import { SectionList } from 'react-native';
import {
  ExpensesHistoryItemSeparatorComponent,
  expensesHistoryKeyExtractor,
  renderExpensesHistoryItem,
  renderExpensesHistorySectionHeader,
} from './expenses-history.sections.tsx';
import { styles } from './expenses-history.styles.ts';
import { expensesHistorySections } from '../lib/data';

export const ExpensesHistory = () => {
  return (
    <SectionList
      sections={expensesHistorySections}
      renderSectionHeader={renderExpensesHistorySectionHeader}
      renderItem={renderExpensesHistoryItem}
      keyExtractor={expensesHistoryKeyExtractor}
      ItemSeparatorComponent={ExpensesHistoryItemSeparatorComponent}
      stickySectionHeadersEnabled={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};
