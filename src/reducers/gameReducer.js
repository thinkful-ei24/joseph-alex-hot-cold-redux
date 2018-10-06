import { SET_GUESSES, SET_FEEDBACK, RESET_GAME } from '../actions/gameActions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === SET_GUESSES) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    });
  }
  if (action.type === SET_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
    });
  }
  if (action.type === RESET_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  return state;
};
