import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import { INotificationProps } from './notification.types.ts';
import { styles } from './notification.styles.ts';
import { Text } from '@shared/ui/text';
import { formatCurrency, sliceCardNumber, arePropsEqual } from '@shared/lib/utils';
import dayjs from 'dayjs';
import { Container } from '@shared/ui/container';

const NotificationComponent: React.FC<INotificationProps> = ({
  Image,
  title,
  amount,
  cardId,
  readStatus,
  date,
  type,
  description,
  cards,
}) => {
  const amountParsed = useMemo(() => {
    return amount ? (Math.abs(amount) === amount ? `+$${amount}` : `-$${Math.abs(amount)}`) : 0;
  }, [amount]);

  const card = useMemo(() => {
    return cards.find(_card => _card.id === cardId);
  }, [cards, cardId]);

  const formattedCardNumber = useMemo(() => {
    return card?.cardNumber ? sliceCardNumber(card.cardNumber) : '';
  }, [card?.cardNumber]);

  const formattedBalance = useMemo(() => {
    return card?.balance ? formatCurrency(card.balance + (amount ?? 0)) : '$0';
  }, [card?.balance, amount]);

  const formattedDate = useMemo(() => {
    return dayjs.unix(date).format('D MMMM YYYY, HH:mm');
  }, [date]);

  return (
    <Container style={styles.notification}>
      <Image style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        {amount && <Text style={styles.amount}>{amountParsed}</Text>}
        {card && (
          <Text style={styles.contentInfo}>
            {card.type} {formattedCardNumber} {'\n'}
            {formattedBalance}
          </Text>
        )}
        {description && <Text style={styles.contentInfo}>{description}</Text>}
        <Text style={styles.notificationInfo}>
          {formattedDate} · {type}
        </Text>
      </View>
      {readStatus === 'unread' && <View style={styles.readStatus} />}
    </Container>
  );
};

export const Notification = memo(NotificationComponent, arePropsEqual);
