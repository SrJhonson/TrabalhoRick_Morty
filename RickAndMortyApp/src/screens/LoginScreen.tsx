import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { getUser } from '../services/storage';

export default function LoginScreen({ navigation }: any) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const savedUser = await getUser();
    if (savedUser && savedUser.nome === user && savedUser.senha === password) {
      navigation.navigate('Cards');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Bem-vindo!</Title>
      <TextInput
        label="Usuário"
        value={user}
        onChangeText={setUser}
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Entrar
      </Button>
      <Button onPress={() => navigation.navigate('Register')}>
        Cadastrar Usuário
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { marginBottom: 10 },
  button: { marginBottom: 10 },
  title: { textAlign: 'center', marginBottom: 30 },
});
