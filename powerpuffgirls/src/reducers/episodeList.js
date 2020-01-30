import { EPISODE_LIST } from '../actions/actions';

const reducer = (state = [], action = {}) => {
   switch(action.type){
        case EPISODE_LIST:
            return action.payload
        default:
            return state
   }
}


export default reducer