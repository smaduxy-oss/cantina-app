import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
  const [usuario, setUsuario] = useState('');
  const [bruxo, setBruxo] = useState('');

  function handleLogin() {
    if (usuario === 'voldermort' && bruxo === 'harry') {
      Alert.alert('Derrote ele, Harry!');
    } else {
      Alert.alert('Tente de novo!');
    }
  }

  return (
    <View style={styles.container}>
      <Text>AVADA KEDAVRA</Text>

      <TextInput
        placeholder="Digite o usuário"
        onChangeText={setUsuario}
        value={usuario}
        style={styles.input}
      />

      <Text>EXPELIARMUS</Text>

      <TextInput
        placeholder="Digite o bruxo"
        onChangeText={setBruxo}
        value={bruxo}
        style={styles.input}
      />

      <Button title="Descubra sua casa" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: '80%',
    marginVertical: 10,
    borderRadius: 5,
  },
});
