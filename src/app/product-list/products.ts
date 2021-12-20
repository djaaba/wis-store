export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  isliked: Boolean;
  counter: number;
}

export const products = [
  {
    id: 0,
    name: 'Apple Iphone 5s',
    price: 59100,
    img: 'https://img.mvideo.ru/Pdb/30016818b.jpg',
    isliked: false,
    counter: 1
  },
  {
    id: 1,
    name: 'Apple Iphone 6',
    price: 69100,
    img: 'https://img.mvideo.ru/Pdb/30028155b.jpg',
    isliked: false,
    counter: 1
  },
  {
    id: 2,
    name: 'Apple Iphone 6s',
    price: 79100,
    img: 'https://img.mvideo.ru/Pdb/30038657b.jpg',
    isliked: false,
    counter: 1
  },
  {
    id: 3,
    name: 'Apple Iphone 11',
    price: 101100,
    img: 'https://img.mvideo.ru/Pdb/30045357b.jpg',
    isliked: false,
    counter: 1
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/