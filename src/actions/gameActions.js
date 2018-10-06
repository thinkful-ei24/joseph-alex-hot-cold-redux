export const SET_GUESSES = 'SET_GUESSES';
export const SET_FEEDBACK = 'SET_FEEDBACK';
export const RESET_GAME = 'RESET_GAME';

export const setGuesses = guess => ({
  type: SET_GUESSES,
  guess
});

export const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

export const resetGame = () => ({
  type: RESET_GAME
});

// // on new game we reset the following:
// guesses: [],
// feedback: 'Make your guess!',
// auralStatus: '',
// correctAnswer: Math.floor(Math.random() * 100) + 1

// set feedback based on user input
