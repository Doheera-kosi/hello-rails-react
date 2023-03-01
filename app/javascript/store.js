import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  greeting: '',
};

const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
};

const fetchGreetingSuccess = greeting => ({
  type: FETCH_GREETING_SUCCESS,
  payload: { greeting },
});

const fetchGreeting = () => {
  return dispatch => {
    axios.get('/api/random_greeting').then(response => {
      dispatch(fetchGreetingSuccess(response.data.greeting));
    });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export { store, fetchGreeting };
