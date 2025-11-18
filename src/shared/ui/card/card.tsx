import React, { useMemo } from 'react';
import { Image, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from './card.styles.ts';
import { MastercardIcon } from '@shared/assets/icons';
import { TCardProps } from './card.types.ts';
import { ADD_CARD_BUTTON_WIDTH, CARDS_GAP, CONTAINER_PADDING } from '@shared/lib/consts';
import { Text } from '@shared/ui/text';
import { sliceCardNumber, formatCurrency } from '@shared/lib/utils';

export const Card: React.FC<TCardProps> = ({ balance, type, cardImageBg, cardNumber }) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - CONTAINER_PADDING - ADD_CARD_BUTTON_WIDTH) / 2 - CARDS_GAP * 2;
  const slicedCardNumber = useMemo(() => {
    return sliceCardNumber(cardNumber);
  }, [cardNumber]);
  const formattedCurrency = useMemo(() => {
    return formatCurrency(balance);
  }, [balance]);
  return (
    <TouchableOpacity style={[styles.card, { width: cardWidth }]}>
      <Image source={cardImageBg} style={styles.cardBg} />
      <MastercardIcon />
      <Text style={styles.balance}>{formattedCurrency}</Text>
      <View style={styles.description}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.type}>{slicedCardNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};
