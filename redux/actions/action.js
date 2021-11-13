import {createAction} from 'redux-act';
const setAzmoon = createAction('setAzmoon');
const initAzmoon = createAction('initAzmoon');
const getAzmoon = createAction('getAzmoon');
const clearAzmoon = createAction('clearAzmoon');
export {

    setAzmoon,
    getAzmoon,
    initAzmoon,
    clearAzmoon
  };