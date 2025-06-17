import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { getCharacterById } from '../services/api';
import CardItem from '../components/CardItem';

export default function CardsScreen({ navigation }: any) {
  const [id, setId] = useState('');
  const [cards, setCards] = useState<any[]>([]);

  const handleAdd = async () => {
    const character = await getCharacterById(id);
    if (character) {
      setCards([...cards, character]);
      setId('');
    }
  };

  const handleDelete = (index: number) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Personagens de Rick and Morty</Title>
      <TextInput
        label="ID do personagem"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAdd} style={styles.button}>
        Adicionar Card
      </Button>

      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { textAlign: 'center', marginBottom: 20 },
  input: { marginBottom: 10 },
  button: { marginBottom: 20 },
});
