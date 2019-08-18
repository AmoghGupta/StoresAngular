import { ShoppingItem } from './shopping-item-model';
import { RemovingItem } from './removing-item-model';

export interface AppState {
  readonly shopping: Array<ShoppingItem>,
  readonly removingItem: RemovingItem
}
