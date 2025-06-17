import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, Title, Snackbar, Text } from 'react-native-paper';
import { getCharacterById } from '../services/api';
import CardItem from '../components/CardItem';

export default function CardsScreen({ navigation }: any) {
  const [id, setId] = useState('');
  const [cards, setCards] = useState<any[]>([]);
  const [snackbar, setSnackbar] = useState({ visible: false, message: '' });

  const principais = [
    { id: '1', nome: 'Rick' },
    { id: '2', nome: 'Morty' },
    { id: '3', nome: 'Summer' },
    { id: '4', nome: 'Beth' },
    { id: '5', nome: 'Jerry' },
  ];

  const showMessage = (message: string) => {
    setSnackbar({ visible: true, message });
  };

  const handleAdd = async () => {
    if (!id) {
      showMessage('Digite um ID válido!');
      return;
    }

    if (cards.some((char) => char.id.toString() === id)) {
      showMessage('Personagem já adicionado!');
      return;
    }

    const character = await getCharacterById(id);
    if (character) {
      setCards([...cards, character]);
      setId('');
      showMessage('Personagem adicionado com sucesso!');
    } else {
      showMessage('ID não encontrado!');
    }
  };

  const handleDelete = (index: number) => {
    const name = cards[index].name;
    const newList = cards.filter((_, i) => i !== index);
    setCards(newList);
    showMessage(`Personagem "${name}" removido!`);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Personagens de Rick and Morty</Title>
      <Text style={styles.subtext}>
        Digite um ID de 1 a 826 para buscar um personagem
      </Text>

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

      <View style={styles.sugestoes}>
        {principais.map((char) => (
          <Button
            key={char.id}
            compact
            mode="outlined"
            style={styles.sugestaoBtn}
            onPress={() => setId(char.id)}
          >
            {char.nome}
          </Button>
        ))}
      </View>

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

      <Snackbar
        visible={snackbar.visible}
        onDismiss={() => setSnackbar({ ...snackbar, visible: false })}
        duration={3000}
      >
        {snackbar.message}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { textAlign: 'center', marginBottom: 10 },
  subtext: { textAlign: 'center', marginBottom: 10, color: '#666' },
  input: { marginBottom: 10 },
  button: { marginBottom: 10 },
  sugestoes: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 15 },
  sugestaoBtn: { marginRight: 6, marginTop: 6 },
});
