import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-einkaufswagen',
  templateUrl: './einkaufswagen.component.html',
  styleUrls: ['./einkaufswagen.component.css']
})
export class EinkaufswagenComponent implements OnInit {

  protected selectedProduct$: Observable<[]>;
  public userInfo: any = {
      user_id : '',
      product_id : '',
      name : '',
      birthday: '',
      hobbies : '',
  };

  constructor(private store: Store<{ selectedProduct: [] }>) {
    this.selectedProduct$ = store.select('selectedProduct');
    this.selectedProduct$.subscribe( response => {
      this.userInfo = Object.assign(this.userInfo, response);
    });
  }

  ngOnInit(): void {
  }

}
