import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor() { }

  // taken from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-9.php
  gcd_more_than_two_numbers(input): any {
    if (toString.call(input) !== '[object Array]') {
      return false;
    }
    let len, a, b;
    len = input.length;
    if ( !len ) {
      return null;
    }
    a = input[ 0 ];
    for ( let i = 1; i < len; i++ ) {
      b = input[ i ];
      a = this.gcd_two_numbers( a, b );
    }
    return a;
  }

  gcd_two_numbers(x, y): any {
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
      return false;
    }
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
}
