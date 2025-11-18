import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  consumption: {
    flexDirection: 'row',
    gap: '12@s',
    padding: '16@s',
    backgroundColor: '#0F0F0F',
    borderRadius: '16@ms',
  },
  image: {
    width: '36@s',
    height: '36@s',
    borderRadius: '12@ms',
  },
  title: {
    fontWeight: '500',
    fontSize: '14@ms',
    marginBottom: '4@vs',
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  categoryIndicator: {
    width: '6@s',
    height: '6@s',
    borderRadius: '6@ms',
  },
  categoryTitle: {
    color: '#B3B3B3',
    fontSize: '14@ms',
  },
  info: {
    marginLeft: 'auto',
  },
  amount: {
    fontWeight: '500',
    marginBottom: '4@vs',
    fontSize: '14@ms',
    textAlign: 'right',
  },
  date: {
    color: '#B3B3B3',
    fontSize: '14@ms',
    textAlign: 'right',
  },
});
