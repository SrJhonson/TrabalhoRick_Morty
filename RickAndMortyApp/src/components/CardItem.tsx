import React from 'react';
import { View, Text, Button, Image } from 'react-native';

export default function CardItem({ character, onDelete, onDetail }: any) {
  return (
    <View>
      <Text>{character.name}</Text>
      <Image source={{ uri: character.image }} style={{ width: 100, height: 100 }} />
      <Button title="Ver Mais Detalhes" onPress={onDetail} />
      <Button title="Excluir" onPress={onDelete} />
    </View>
  );
}
