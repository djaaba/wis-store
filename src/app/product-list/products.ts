export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  // isliked: Boolean;
}

export const products = [
  {
    id: 1,
    name: 'Apple Iphone 5s',
    price: 59100,
    description: 'A large phone with one of the best screens',
    img: 'https://img.mvideo.ru/Pdb/30016818b.jpg'
  },
  {
    id: 2,
    name: 'Apple Iphone 6',
    price: 69100,
    description: 'A great phone with one of the best cameras',
    img: 'https://img.mvideo.ru/Pdb/30028155b.jpg'
  },
  {
    id: 3,
    name: 'Apple Iphone 6s',
    price: 79100,
    description: '',
    img: 'https://img.mvideo.ru/Pdb/30038657b.jpg'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/