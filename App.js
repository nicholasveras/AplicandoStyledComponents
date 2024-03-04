import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

import { Container, Title, Nome, BotaoProgramador, BotaoText} from './src/styles';

export default function App() {
  return (
    <Container>
      <Title cor="#FF0000" >Nicholas Dev</Title>
      <Nome>Olá Nicholas!</Nome>

      <BotaoProgramador onPress={() => alert('Clicouuu!!')}>
        <BotaoText>Entrar</BotaoText>
      </BotaoProgramador>

      <StatusBar style="auto" />
    </Container>
  );
}

