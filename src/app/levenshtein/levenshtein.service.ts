import { Injectable } from '@angular/core';

@Injectable()
export class LevenshteinService {

  constructor() { }

  distance(value: string, toCompare: string) {
    if(!value || !toCompare 
      || value.length == 0 
      || toCompare.length == 0) {
        return -1;
    }

    if(value == toCompare ){
      return 0;
    }

    var v0: number[] = [];
    var v1: number[] = [];
    var vtemp: number[];

    for (let i: number = 0; i < toCompare.length + 1; i++) {
      v0.push(0);
      v1.push(0);
    }

    for (let i: number = 0; i < v0.length; i++) {
      v0[i] = i;
    }

    for (let i = 0; i < value.length; i++) {
      v1[0] = i + 1;

      // use formula to fill in the rest of the row
      for (let j = 0; j < toCompare.length; j++) {
          var cost: number = 1;
          if (value.charAt(i) == toCompare.charAt(j)) {
              cost = 0;
          }
          var c = Math.min(
                  v1[j] + 1,              // Cost of insertion
                  Math.min(
                          v0[j + 1] + 1,  // Cost of remove
                          v0[j] + cost)); // Cost of substitution
          v1[j + 1] = c;
      }

      // copy v1 (current row) to v0 (previous row) for next iteration
      //System.arraycopy(v1, 0, v0, 0, v0.length);

      // Flip references to current and previous row
      vtemp = v0;
      v0 = v1;
      v1 = vtemp;

    }
    return v0[toCompare.length];
  }

}
