import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor() { }

  // returns string of the ratio of the number of employees in each role
  getRoleRatio(allResources): string{
    let engineers = 0;
    let uX = 0;
    let pM = 0;

    allResources.forEach(resource => {
      if (resource.role === 'Engr'){
        engineers++;
      } else if (resource.role === 'UX'){
        uX++;
      } else if (resource.role === 'PM'){
        pM++;
      }
    });
    let gcd = this.gcd_more_than_two_numbers([engineers, uX, pM]);
    return `${engineers / gcd} Engineers : ${uX / gcd} UX : ${pM / gcd} Project Managers`;
  }

  getDiversity(allResources): number{
    let pocCount = 0;
    const totalCount = allResources.length;
    allResources.forEach(resource => {
      if (resource.personOfColor === true){
        pocCount++;
      }
    });
    console.log(pocCount / totalCount);
    return (pocCount / totalCount);
  }

  getGenderRatio(allResources): string{
    let maleCount = 0;
    const totalCount = allResources.length;
    allResources.forEach(resource => {
      if (resource.gender === 'M'){
        maleCount++;
      }
    });
    const femaleCount = totalCount - maleCount;
    return `Male: ${maleCount} | Female: ${femaleCount}`;
  }

  getLocationResources(location, allResources): string{
    let engCount = 0;
    let uXCount = 0;
    let pMCount = 0;
    allResources.forEach(resource => {
      if (resource.location === location){
        if (resource.role === 'Engr'){
          engCount++;
        } else if (resource.role === 'UX'){
          uXCount++;
        } else if (resource.role === 'PM'){
          pMCount++;
        }
      }
    });
    return `Engr: ${engCount} | UX: ${uXCount} | PM: ${pMCount}`;
  }


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

  // taken from same source as above
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
