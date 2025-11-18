import { DefaultSectionT, SectionListData, SectionListRenderItem, View } from 'react-native';
import { Consumption, IConsumption } from '@shared/ui/consumption';
import { styles } from './expenses-history.styles.ts';
import React from 'react';
import { categories } from '@entities/categories/lib';
import { Text } from '@shared/ui/text';

export const renderExpensesHistorySectionHeader = ({
  section,
}: {
  section: SectionListData<IConsumption, DefaultSectionT>;
}) => <Text style={styles.sectionTitle}>{section.title}</Text>;

export const renderExpensesHistoryItem: SectionListRenderItem<IConsumption, DefaultSectionT> = ({
  item,
}) => <Consumption {...item} categories={categories} />;

export const expensesHistoryKeyExtractor = (item: IConsumption) => item.id;

export const ExpensesHistoryItemSeparatorComponent = () => <View style={styles.separator} />;
