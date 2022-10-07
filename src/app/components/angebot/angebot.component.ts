import { Component, OnInit,  Input, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddProduct, RemoveProduct, Reset } from '../../actions/cart';
import { ChooseProduct } from '../../actions/product';

@Component({
  selector: 'app-angebot',
  templateUrl: './angebot.component.html',
  styleUrls: ['./angebot.component.css']
})

export class AngebotComponent implements OnInit {
  cart$: Observable<[]>;
  @Input() item: any = {};

  constructor(private store: Store<{ cart: [] }>, public element: ElementRef) {
    this.cart$ = store.select('cart');
  }
  public product_amount:any = 0

  ngOnInit(): void {
    // console.log(item);
  }

  //selected product
  selectProduct(){

    var userInfo = {
      user_id : "1",
      product_id : '12',
      name : 'Dee J Williams',
      birthday: '29 August 1999',
      hobbies : 'Cooking, Fishing, Darwing',
    };

    this.store.dispatch(new ChooseProduct(userInfo));

  }

  //add product to cart
  addCart() {
    if(this.product_amount > 0){

      var product = {
        _id:    this.item.id,
        image:  this.item.bild.url,
        title:  this.item.name,
        price:  this.item.discount * this.item.uvp,
        amount: this.product_amount,
        discount: this.item.discount,
        uvp: this.item.uvp
      }

      this.store.dispatch(new AddProduct(product));
      this.product_amount = 0;

    } else{
      alert("Invalid Amount");
    }

  }

  //remove proudct in cart
  increase() {
    if(this.product_amount > 14){
      alert("Oops, the product count is limited by 15 count");
    }else{
      this.product_amount++;
    }
  }

  //reset cart storage
  decrease() {
    if(this.product_amount != 0){
      this.product_amount--;
    }
  }
}
