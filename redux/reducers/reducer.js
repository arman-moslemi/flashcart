import * as Action from '../actions/action';
import {createReducer} from 'redux-act';
const reducer = createReducer(
    {

        [Action.initAzmoon]: (state, azmoon) => ({
            ...state,
            azmoon:azmoon,

          }),
        [Action.setAzmoon]: (state, id) => {
            const azmoon = state.azmoon.find(c=>c._id == id);
            azmoon.status = 'done';
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
