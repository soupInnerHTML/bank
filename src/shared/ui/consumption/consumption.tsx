import React, { memo, useMemo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { IConsumptionProps } from './consumption.types.ts';
import { styles } from './consumption.styles.ts';
import { Text } from '@shared/ui/text';
import dayjs from 'dayjs';
import { arePropsEqual } from '@shared/lib/utils';

const ConsumptionComponent: React.FC<IConsumptionProps> = ({
  image,
  amount,
  title,
  category: categoryId,
  date,
  categories,
}) => {
  const category = useMemo(
    () => categories.find(_category => _category.id === categoryId),
    [categoryId, categories],
  );
  const formattedDate = useMemo(() => dayjs.unix(date).format('MMM D, HH:mm'), [date]);
  return (
    <TouchableOpacity style={styles.consumption}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.description}>
          <View style={[styles.categoryIndicator, { backgroundColor: category?.color }]} />
          <Text style={styles.categoryTitle}>{category?.name}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.amount}>${amount}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Consumption = memo(ConsumptionComponent, arePropsEqual);
