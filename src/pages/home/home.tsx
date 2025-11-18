import React from 'react';
import { Header } from '@features/header/ui';
import { HomeIcons } from '@features/home-icons/ui';
import { Cards } from '@features/cards/ui';
import { Expenses } from '@widgets/expenses/ui';
import { Container } from '@shared/ui/container';

export const Home = () => {
  return (
    <Container>
      <Header />
      <HomeIcons />
      <Cards />
      <Expenses />
    </Container>
  );
};
