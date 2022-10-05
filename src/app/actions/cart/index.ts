import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddProduct = '[Cart Component] Add',
  RemoveProduct = '[Cart Component] Remove',
  Reset = '[Cart Component] Reset',
}

interface AddProductPayload {
    _id: string,
    image: string,
    title: string,
    price: number,
    amount: number,
}

export class AddProduct implements Action {
  readonly type = ActionTypes.AddProduct;
  constructor(readonly payload: AddProductPayload) {}
}

export class RemoveProduct implements Action {
  readonly type = ActionTypes.RemoveProduct;
  constructor(readonly payload: { _id: string }) {}
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}
