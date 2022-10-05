import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input,AfterViewInit,  OnInit, HostBinding } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        z-index: 1030;
        width: 100%;
      }
    `
  ],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0.9, height: '40px', transform: 'translateY(-30%)' }),
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})



export class NavbarComponent implements AfterViewInit {

  @Input() pages: Item[] = [];
  public cart$: Observable<[]>;
  public cartCount: number = 0;
  private isVisible = true;

  constructor(private store: Store<{ cart: [] }>) {
    this.cart$ = store.select('cart');
    this.cart$.subscribe(data => {

        data.map((item:any, i: number) => {
            this.cartCount += item.amount;
        })
    });
  }

  ngOnInit(): void {}

  @HostBinding('@toggle')

  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    goingUp$.subscribe(() => (this.isVisible = true));
    goingDown$.subscribe(() => (this.isVisible = false));
  }
}
