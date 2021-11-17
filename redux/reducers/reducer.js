import * as Action from '../actions/action';
import {createReducer} from 'redux-act';
const reducer = createReducer(
    {

        [Action.initAzmoon]: (state, azmoon) => ({
            ...state,
            azmoon:azmoon,

          }),
        [Action.setAzmoon]: (state, id) => {
            const azmoon = state.azmoon.find(c=>c.SubExamID == id.split('T')[0]);
            azmoon.CustomerAnswer = id.split('T')[1];
            return Object.assign({}, state);

          },
          [Action.clearAzmoon]: (state) => ({
            ...state,
            azmoon:[],
          }),
    },{
azmoon:[]

    }
)
export default reducer;
