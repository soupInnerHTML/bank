import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Card } from '@shared/ui/card';
import { styles } from './cards.styles.ts';
import { PlusIcon } from '../assets/icons';
import { cards } from '@entities/cards/lib/consts';

export const Cards = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.cards} style={styles.cardsScrollView}>
      {cards.map(({ id, ...card }) => (
        <Card key={id} {...card} />
      ))}
      <TouchableOpacity style={styles.addCard}>
        <PlusIcon />
      </TouchableOpacity>
    </ScrollView>
  );
};
