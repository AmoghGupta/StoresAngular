import {Action} from '@ngrx/store';
import {ShoppingItem} from '../models/shopping-item-model';
import { RemovingItem } from '../models/removing-item-model';

export enum ShoppingActionsTypes{
  ADD_ITEM =  '[Shopping] Add Item',
  ADD_ITEM_SUCCESS =  '[Shopping] Add Item Success',
  ADD_ITEM_FAILURE =  '[Shopping] Add Item Failure',
  REMOVE_ITEM = '[Shopping] Remove Item'
}

export class AddItemAction implements Action{
    readonly type = ShoppingActionsTypes.ADD_ITEM;

    constructor(public payload: ShoppingItem){}
}

export class RemoveItemAction implements Action{
  readonly type = ShoppingActionsTypes.REMOVE_ITEM;

  constructor(public payload: RemovingItem){}
}

export type ShoppingAction = AddItemAction |RemoveItemAction;
