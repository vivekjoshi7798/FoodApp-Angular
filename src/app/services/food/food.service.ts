import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return[
      '/assets/food1.jpg',
      '/assets/food10.jpg',
      '/assets/food2.jpg',
      '/assets/food3.jpg',
      '/assets/food4.jpg',
      '/assets/food5.jpg',
      '/assets/food6.jpg',
      '/assets/Food7.jpg',
      '/assets/food8.jpg',
      '/assets/Food9.jpg',
    ]
  }
}

