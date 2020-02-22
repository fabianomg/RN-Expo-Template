import * as React from 'react';
<<<<<<< HEAD
import { View } from 'react-native';

import TypeWriter from 'react-native-typewriter'

import { ConsoleContainer, Text } from './style';

export default function Home() {
  const frases = [
    'Welcome to the react native world.'
  ];

  function renderText(text){
    const style = {
      textAlign: "center"
    }
    const onEnd = () => {
    }
    return (
      <TypeWriter style={style} key={text} onTypingEnd={onEnd} minDelay={100} typing={1}>
        <Text>{text}</Text>
      </TypeWriter>
    );
  }

  return (
    <ConsoleContainer>
        {frases.map(frase => (
          renderText(frase)
        ))}
=======
import { View, Text } from 'react-native';

import { ConsoleContainer, ConsoleUnderscore, H1 } from './style';

export default function Home() {
  return (
    <ConsoleContainer className='console-container'>
      <H1 id='text'>asds</H1>
      <ConsoleUnderscore className='console-underscore' id='console'>&#95;</ConsoleUnderscore>
>>>>>>> f3afe1e94ce4da792cf323b302d880e40e7066f9
    </ConsoleContainer>
  );
}