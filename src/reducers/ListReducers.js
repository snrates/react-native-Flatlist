import AsyncStorage from '@react-native-community/async-storage';
import { SET_LIST, GET_LIST, LOADING_START, LOADING_END, UPDATE_LIST, ADD_LIST_LOCAL } from '../actions/types';

const INITIAL_STATE = {
  list: [],
  loading: false,
};
export default (state = INITIAL_STATE, action) => {


  switch (action.type) {



    case UPDATE_LIST:

      const obj = action.payload
      let arr = [...state.list]
      arr.push(obj)

      AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arr))

      return {
        ...state,
        list: arr,
      };

    case GET_LIST:
      return {
        ...state,
        list: action.payload,
      };
      
    case SET_LIST:
      return {
        ...state,
        list: action.payload
      };

    case LOADING_START:
      return {
        ...state,
        loading: action.payload,
      };

    case LOADING_END:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
};