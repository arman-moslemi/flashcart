import * as UserAction from '../redux/actions/action';
import {store} from '../redux/stores/store';
const getAzmoon = () => {
    return store.getState().azmoon;
  };
  const updateAzmoon = data => {
    const {dispatch} = store;
    dispatch(UserAction.setAzmoon(data));
  };
  const initAzmoon = data => {
    const {dispatch} = store;
    dispatch(UserAction.initAzmoon(data));
  };
  const clearAzmoon = data => {
    const {dispatch} = store;
    dispatch(UserAction.clearAzmoon(data));
  };
  export {getAzmoon, updateAzmoon,initAzmoon,clearAzmoon};
