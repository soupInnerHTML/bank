import { ScaledSheet } from 'react-native-size-matters';
import { ADD_CARD_BUTTON_WIDTH, CARD_HEIGHT, CARDS_GAP } from '@shared/lib/consts';

export const styles = ScaledSheet.create({
  cards: {
    gap: CARDS_GAP,
    marginVertical: '24@vs',
  },
  cardsScrollView: {
    maxHeight: '146@s',
  },
  addCard: {
    height: CARD_HEIGHT,
    backgroundColor: '#0F0F0F',
    borderRadius: '16@ms',
    width: ADD_CARD_BUTTON_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
