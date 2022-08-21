import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTag(): Tag[] {
    return [
      {name:'all', count: 14},
      {name:'FastFood', count: 4},
      {name:'Pizza', count: 2},
      {name:'lunch', count: 3}, 
      {name:'SlowFood', count: 2},
      {name:'Hamburger', count: 1},
      {name:'Fry', count: 1},
      {name:'Soup', count: 1}
    ]
  }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == "all" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

    // if(tag=='all')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 20,
        name: 'Chiken tikka',
        favorite: false,
        star: 1.5,
        tags: ['lunch', 'FastFood', 'FastFood', 'snacks'],
        imgurl: '/assets/food1.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
      {
        id: 2,
        price: 20,
        name: 'Dalguna coffe',
        favorite: false,
        star: 2.5,
        tags: ['lunch', 'SlowFood', 'FastFood'],
        imgurl: '/assets/food2.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
      {
        id: 3,
        price: 20,
        name: 'burger',
        favorite: false,
        star: 3.5,
        tags: ['lunch', 'Dinner', 'FastFood'],
        imgurl: '/assets/food3.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
      {
        id: 4,
        price: 20,
        name: 'Diet Coak',
        favorite: false,
        star: 4.5,
        tags: ['lunch', 'Dinner', 'FastFood'],
        imgurl: '/assets/food4.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
      {
        id: 5,
        price: 20,
        name: 'Farm Pizza',
        favorite: false,
        star: 4,
        tags: ['SlowFood', 'Dinner', 'Pizza'],
        imgurl: '/assets/food5.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
      {
        id: 6,
        price: 20,
        name: 'Cofee',
        favorite: false,
        star: 5,
        tags: ['lunch', 'Dinner', 'FastFood'],
        imgurl: '/assets/food6.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
      {
        id: 7,
        price: 20,
        name: 'Food Juice',
        favorite: true,
        star: 3.5,
        tags: ['lunch', 'Dinner', 'FastFood'],
        imgurl: '/assets/Food7.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
      {
        id: 8,
        price: 20,
        name: 'Cake',
        favorite: false,
        star: 2,
        tags: ['Hamburger'],
        imgurl: '/assets/food8.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
      {
        id: 9,
        price: 20,
        name: 'Drinks',
        favorite: false,
        star: 1.5,
        tags: ['Dinner', 'Fry'],
        imgurl: '/assets/Food9.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
      {
        id: 10,
        price: 20,
        name: 'Veg Pizza',
        favorite: false,
        star: 3.5,
        tags: ['lunch', 'Soup'],
        imgurl: '/assets/food10.jpg',
        cooktime: '10-20',
        origins: ['india', 'pak']
      },
    ]
  }
}
