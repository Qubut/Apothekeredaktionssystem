// import { sendmail } from 'sendmail';
import { EmailService } from 'src/app/email.service';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, fromEvent } from 'rxjs';
import { AddProduct, RemoveProduct, Reset, Refresh } from '../../actions/cart';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-einkaufswagen',
  templateUrl: './einkaufswagen.component.html',
  styleUrls: ['./einkaufswagen.component.css']
})
export class EinkaufswagenComponent implements OnInit {

  public cart$: Observable<[]>;
  public storedProduct: any = [];
  public cartCount = 0;
  public totalPrice = 0;
  public productCount = 0;
  public userInfo = {
    name:'',
    telefon:'',
    address: '',
    email: '',
    message:''
  };

  constructor(private store: Store<{ cart: [] }>, private http:  HttpClient) {

    this.cart$ = store.select('cart');
    this.cart$.subscribe(data => {

        var amount: number = 0;
        var price: number = 0;

        data.map((item:any, i: number) => {
           amount += parseInt(item.amount);
           price  += item.amount * item.price

        });

        this.cartCount  = amount;
        this.totalPrice = parseInt(price.toString().slice(0, 5));
        this.storedProduct = data;

    });
  }

  ngOnInit(): void {}

  public mail = new EmailService(this.http);

  changeProductCN(product_id: any, amount: any) {
    let resetCount = {
      _id: product_id,
      reset_num: amount.value
    }
    this.store.dispatch(new Reset(resetCount));
  }

  removeProduct(product_id: any): void{
      this.store.dispatch(new RemoveProduct({_id: product_id}));
  }

  orderProduct() {
      if(this.validateFrm()){
          let beautifyTxT = this.makeMessageTxT(this.storedProduct);
          var result = this.mail.SendEmail(beautifyTxT);
          if(result){
              alert("The mail is sent successfuly");

              this.store.dispatch(new Refresh());
          }
      }
  }

  makeMessageTxT(products: any){

      var txt = `<pre>
                      Name: ${this.userInfo.name}
                      Ordered:
                      Products List
                </pre>`;

      products.map((item: any) => {
          txt += `<br>
                  <pre>
                      product name: ${item.title}
                      amount : ${item.amount}
                      discount : ${item.discount}
                      price:  : ${item.uvp * item.discount * item.amount}
                  </pre>`;
      });

      txt +=`
        <pre>
          <p> * email: ${this.userInfo.email}</p>
          <p> * telfon: ${this.userInfo.telefon}</p>
          <p> * address: ${this.userInfo.address}</p>
          <p> * message: ${this.userInfo.message}</p>
        </pre>
      `
      return txt;
  }


  validateFrm (): Boolean {
      if(this.userInfo.name == ""){
          alert('name is required field');
          return false
      }else if(this.userInfo.telefon == ""){
          alert('telefon is required field');
          return false
      }else if(!this.validateEmail(this.userInfo.email) ){
          alert('Invalid email');
          return false
      }
      return true;
  }

  validateEmail = (email: any) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
}
