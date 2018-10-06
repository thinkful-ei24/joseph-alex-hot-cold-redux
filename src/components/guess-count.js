import React from 'react';

import './styles/guess-count.css';
import store from '../store';

export default function GuessCount(props) {
  const isPlural = props.guessCount !== 1;
  const guessNoun = isPlural ? 'guesses' : 'guess';
  console.log(store.getState().guesses.length);
  return (
    <h2 id="guessCount">
      You've made <span id="count">{store.getState().guesses.length}</span>{' '}
      {guessNoun}!
    </h2>
  );
}
