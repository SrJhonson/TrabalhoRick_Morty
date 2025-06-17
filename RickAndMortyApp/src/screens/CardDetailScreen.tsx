import React from 'react';
import { View, Text, Image } from 'react-native';

export default function CardDetailScreen({ route }: any) {
  const { character } = route.params;

  return (
    <View>
      <Image source={{ uri: character.image }} style={{ width: 200, height: 200 }} />
      <Text>Nome: {character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Espécie: {character.species}</Text>
      <Text>Origem: {character.origin.name}</Text>
      <Text>Localização: {character.location.name}</Text>
    </View>
  );
}
