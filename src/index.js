import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import { setGuesses, setFeedback, resetGame } from './actions/gameActions';

import './reset.css';
import './index.css';

import Game from './components/game';

store.dispatch(setGuesses(1));
store.dispatch(setGuesses(2));
store.dispatch(setGuesses(3));
store.dispatch(setGuesses(5));
store.dispatch(setGuesses(7));

store.dispatch(setFeedback('Youre hot'));
store.dispatch(setFeedback('Youre cold'));

store.dispatch(resetGame());
console.log(store.getState());

ReactDOM.render(<Game />, document.getElementById('root'));
