import { AddProduct, RemoveProduct } from './../../actions/cart/index';
import { Action } from '@ngrx/store';
import { ActionTypes } from '../../actions/cart';

export function cartReducer(state:any = [], action: any) {
  switch (action.type) {
    case ActionTypes.AddProduct:

      var preProduct  = state.filter((item: any) => item._id == action.payload._id);
      var totalAmount = action.payload.amount;
      var currentProduct = Object.assign({}, action.payload);

      if(preProduct.length > 0){
          totalAmount +=  preProduct[0].amount;
      }

      return  [
        ...state.filter((item: any) => item._id !== action.payload._id),
          ...[Object.assign(currentProduct,{amount: totalAmount})],
      ];

    case ActionTypes.RemoveProduct:
      return [...state];

    case ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}
