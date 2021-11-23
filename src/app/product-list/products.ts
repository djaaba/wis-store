export interface Product {
  name: string;
  price: number;
  img: string;
  isliked: Boolean;
}

export interface IProduct{
  item: Product;
  count: number;
}
export const products = [
  {
    name: 'Apple Iphone 5s',
    price: 59100,
    img: 'https://img.mvideo.ru/Pdb/30016818b.jpg',
    isliked: false
  },
  {
    name: 'Apple Iphone 6',
    price: 69100,
    img: 'https://img.mvideo.ru/Pdb/30028155b.jpg',
    isliked: false
  },
  {
    name: 'Apple Iphone 6s',
    price: 79100,
    img: 'https://img.mvideo.ru/Pdb/30038657b.jpg',
    isliked: false
  },
  {
    id: 3,
    name: 'Apple Iphone 11',
    price: 101100,
    img: 'https://img.mvideo.ru/Pdb/30045357b.jpg',
    isliked: false
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/