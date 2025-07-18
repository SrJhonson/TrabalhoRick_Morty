import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { saveUser } from '../services/storage';

export default function RegisterScreen({ navigation }: any) {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    cpf: '',
    email: '',
    curso: '',
    senha: '',
  });

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isNumber = (value: string) => {
    return /^\d+$/.test(value);
  };

  const validatePassword = (senha: string) => {
    const minLength = senha.length >= 6;
    const hasNumber = /\d/.test(senha);
    const hasLetter = /[a-zA-Z]/.test(senha);
    return minLength && hasNumber && hasLetter;
  };

  const handleSave = async () => {
    const { nome, telefone, cpf, email, curso, senha } = form;

    if (!nome || !telefone || !cpf || !email || !curso || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (!isNumber(telefone) || !isNumber(cpf)) {
      Alert.alert('Erro', 'Telefone e CPF devem conter apenas números!');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Erro', 'E-mail inválido!');
      return;
    }

    if (!validatePassword(senha)) {
      Alert.alert('Senha inválida', 'A senha deve conter pelo menos 6 caracteres, incluindo letras e números.');
      return;
    }

    await saveUser(form);
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Cadastro de Usuário</Title>
      <TextInput label="Nome" value={form.nome} onChangeText={text => setForm({ ...form, nome: text })} style={styles.input} />
      <TextInput label="Telefone" value={form.telefone} onChangeText={text => setForm({ ...form, telefone: text })} style={styles.input} keyboardType="numeric" />
      <TextInput label="CPF" value={form.cpf} onChangeText={text => setForm({ ...form, cpf: text })} style={styles.input} keyboardType="numeric" />
      <TextInput label="E-mail" value={form.email} onChangeText={text => setForm({ ...form, email: text })} style={styles.input} keyboardType="email-address" />
      <TextInput label="Curso" value={form.curso} onChangeText={text => setForm({ ...form, curso: text })} style={styles.input} />
      <TextInput label="Senha" value={form.senha} onChangeText={text => setForm({ ...form, senha: text })} secureTextEntry style={styles.input} />
      <Button mode="contained" onPress={handleSave} style={styles.button}>Salvar</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: 'center' },
  input: { marginBottom: 10 },
  button: { marginTop: 20 },
  title: { textAlign: 'center', marginBottom: 20 },
});
