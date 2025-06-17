import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';

export default function CardDetailScreen({ route }: any) {
  const { character } = route.params;
  const [firstEpisode, setFirstEpisode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFirstEpisode = async () => {
      try {
        const url = character.episode[0]; // URL do primeiro episódio
        const response = await axios.get(url);
        setFirstEpisode(response.data.name);
      } catch {
        setFirstEpisode('Episódio não encontrado');
      } finally {
        setLoading(false);
      }
    };

    fetchFirstEpisode();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Cover source={{ uri: character.image }} />
        <Card.Content>
          <Title>{character.name}</Title>
          <Paragraph>Status: {character.status}</Paragraph>
          <Paragraph>Última localização conhecida: {character.location.name}</Paragraph>
          {loading ? (
            <ActivityIndicator animating />
          ) : (
            <Paragraph>Primeira aparição: {firstEpisode}</Paragraph>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
