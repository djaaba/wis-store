export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  src: string;
  // isliked: Boolean;
}

export const products = [
  {
    id: 1,
    name: 'Apple Iphone 5s',
    price: 59100,
    description: 'A large phone with one of the best screens',
    src: 'https://img.mvideo.ru/Pdb/30016818b.jpg'
  },
  {
    id: 2,
    name: 'Apple Iphone 6',
    price: 69100,
    description: 'A great phone with one of the best cameras',
    src: 'https://img.mvideo.ru/Pdb/30016818b.jpg'
  },
  {
    id: 3,
    name: 'Apple Iphone 6s',
    price: 79100,
    description: '',
    src: 'https://img.mvideo.ru/Pdb/30016818b.jpg'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/