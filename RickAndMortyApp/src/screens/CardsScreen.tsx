import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import { getCharacterById } from '../services/api';
import CardItem from '../components/CardItem';

export default function CardsScreen({ navigation }: any) {
  const [id, setId] = useState('');
  const [cards, setCards] = useState<any[]>([]);

  const handleAdd = async () => {
    const character = await getCharacterById(id);
    if (character) setCards([...cards, character]);
  };

  const handleDelete = (index: number) => {
    const newList = cards.filter((_, i) => i !== index);
    setCards(newList);
  };

  return (
    <View>
      <TextInput placeholder="ID do personagem" onChangeText={setId} />
      <Button title="ADD" onPress={handleAdd} />
      <FlatList
        data={cards}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <CardItem
            character={item}
            onDelete={() => handleDelete(index)}
            onDetail={() => navigation.navigate('Details', { character: item })}
          />
        )}
      />
    </View>
  );
}
