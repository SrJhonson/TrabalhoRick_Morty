import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

export default function CardItem({ character, onDelete, onDetail }: any) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: character.image }} />
      <Card.Content>
        <Title>{character.name}</Title>
        <Paragraph>Status: {character.status}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onDetail}>Ver Detalhes</Button>
        <Button onPress={onDelete}>Excluir</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 15 },
});
