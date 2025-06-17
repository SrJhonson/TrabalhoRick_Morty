# 📱 Rick and Morty Mobile App

Aplicativo desenvolvido em **React Native com Expo**, que permite login, cadastro local e visualização de personagens da série *Rick and Morty* consumindo dados da API pública.

---

## ⚙️ Funcionalidades

- Tela de **Login** com autenticação local via AsyncStorage  
- Tela de **Cadastro** com validações (números, e-mail e senha segura)  
- Tela de **Cards**:
  - Input de ID com sugestões de personagens principais  
  - Busca em tempo real na API pública do Rick and Morty  
  - Alertas visuais de feedback (adicionado, duplicado, removido)  
- Tela de **Detalhes**:
  - Imagem, nome, status, última localização e episódio de estreia  
- Interface moderna utilizando **Material Design** com React Native Paper

---

## 🧱 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [Axios](https://axios-http.com/)
- [Rick and Morty API](https://rickandmortyapi.com/)

---

## 📂 Estrutura de Pastas

```
src/
├── components/
│   └── CardItem.tsx
├── navigation/
│   └── index.tsx
├── screens/
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   ├── CardsScreen.tsx
│   └── CardDetailScreen.tsx
├── services/
│   ├── api.ts
│   └── storage.ts
App.tsx
```

---

## 🚀 Como Rodar o Projeto

1. Instale o Node.js e o Expo CLI:
```bash
npm install -g expo-cli
```

2. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/rick-and-morty-app.git
cd rick-and-morty-app
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o app:
```bash
npx expo start
```

Escaneie o QR Code com o app **Expo Go** no seu celular.

---

## 💡 Observações

- IDs válidos: de **1 a 826**, conforme a versão atual da API.  
- Todos os dados de usuário são armazenados localmente com segurança via **AsyncStorage**.  
- O projeto segue uma **arquitetura modular e responsiva**, com foco em **usabilidade** e **código limpo**.

---

## ✨ Projeto Acadêmico

Atividade prática para aprendizado de desenvolvimento mobile com React Native e integração com APIs públicas.

---

## 👨‍💻 Desenvolvido por

**Jhonatan Dias**
