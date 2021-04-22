import axios from 'axios';

// Data
import authActions from './authAction';
//https://goit-phonebook-api.herokuapp.com/

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

//POST /users/signup
// body { name, email, password } -  credentials

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    // token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

//POST
/// users/login
const LogIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);
    // token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};
export default { register, LogIn }; //  logOut, getCurrentUser
