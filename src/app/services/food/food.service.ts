import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodId(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags(): Tag[] {
    return [
      { name: 'Tous', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Déjeuner', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Frite', count: 1 },
      { name: 'Soupe', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italie'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Déjeuner'],
      },
      {
        id: 2,
        name: 'Boulette de viande',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Perse', 'Moyen-Orient', 'Chine'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Déjeuner'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Allemagne', 'Etats-Unis'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Pommes frites',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgique', 'France'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Frite'],
      },
      {
        id: 5,
        name: 'Soupe de poulet',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Inde', 'Asie'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soupe'],
      },
      {
        id: 6,
        name: 'Pizza aux légumes',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italie'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Déjeuner'],
      },
    ];
  }
}
