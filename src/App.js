import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

var timer = null;

const App = () => {
  const [numCronometro, setNumCronometro] = useState(0);
  const [textBotao, setTextBotao] = useState('Iniciar');

  const iniciarCronometro = () => {
    if (timer != null) {
      clearInterval(timer);
      setTextBotao('Iniciar');
    } else {
      setTextBotao('Parar');
      timer = setInterval(() => {
        setNumCronometro(numCronometro => numCronometro + 0.1);
      }, 100);
    }
  };

  const limparCronometro = () => {
    if (timer != null) {
      clearInterval(timer);
      setNumCronometro(0);
      setTextBotao('Iniciar');
      timer = null;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/cronometro.png')} style={styles.logo} />
      <Text style={styles.timer}>{numCronometro.toFixed(1)}</Text>

      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={iniciarCronometro}>
          <Text style={styles.textButton}>{textBotao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={limparCronometro}>
          <Text style={styles.textButton}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef',
  },
  logo: {},
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    margin: 16,
  },
  textButton: {
    fontSize: 18,
    color: '#00aeef',
    fontWeight: 'bold',
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
});

export default App;
