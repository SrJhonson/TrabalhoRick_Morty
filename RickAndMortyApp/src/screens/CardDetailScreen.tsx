import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function CardDetailScreen({ route }: any) {
  const { character } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Cover source={{ uri: character.image }} />
        <Card.Content>
          <Title>{character.name}</Title>
          <Paragraph>Espécie: {character.species}</Paragraph>
          <Paragraph>Origem: {character.origin.name}</Paragraph>
          <Paragraph>Localização Atual: {character.location.name}</Paragraph>
          <Paragraph>Status: {character.status}</Paragraph>
          <Paragraph>Gênero: {character.gender}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
});
