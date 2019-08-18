import { ShoppingItem } from "../models/shopping-item-model";
import { ShoppingAction, ShoppingActionsTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
    {
      id: "1775935f-36fd-467e-a667-09f95b917f6d",
      name: "Fanta"
    },
    {
      id: "1775935f-36fd-467e-a667-29f95b917f6f",
      name: "Diet Coke"
    }
]


export function ShoppingReducer(state: Array<ShoppingItem>=initialState, action: ShoppingAction){
  switch(action.type){

    case ShoppingActionsTypes.ADD_ITEM:
      return[...state, action.payload]

    case ShoppingActionsTypes.REMOVE_ITEM:
      return state.filter((item)=>{
        return item.id != action.payload.id
      })

    default:
      return state;
  }
}
