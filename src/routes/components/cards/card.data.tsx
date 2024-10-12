import { getProducts } from '@api/ecommerce'

const PRODUCTS = getProducts()

export const ProductData = PRODUCTS[8]
export const ProductWithoutDiscountData = PRODUCTS[4]
// export const ProductVertical = PRODUCTS[3];

export const reviewData = {
  id: 'Nice-222',
  user: {
    name: 'Hamza Miloud Amar',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  review:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem adipisci architecto fuga numquam impedit nobis cupiditate, dolore laudantium consequatur voluptates porro mollitia illum. Aliquid dolore minus quas. Modi, illum autem!',
  rating: 4.4,
  date: new Date(),
}

export const reviewData2 = {
  id: 'Nice-2221',
  user: {
    name: 'Nabil T9alya Tomass Edicon helocopter fair main laqin',
    avatar: 'https://i.pravatar.cc/100?img=15',
  },
  review:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem adipisci architecto fuga numquam impedit nobis cupiditate, dolore laudantium consequatur voluptates porro mollitia illum. Aliquid dolore minus quas. Modi, illum autem!',
  rating: 3.4,
  date: new Date(),
}
export const POSTS = [
  {
    id: 'Nice-2221',
    user: {
      name: 'Ryan Health',
      avatar: 'https://i.pravatar.cc/100?img=15',
    },
    title: 'How to Help make Decision',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem adipisci architecto fuga numquam impedit nobis cupiditate, dolore laudantium consequatur voluptates porro mollitia illum. Aliquid dolore minus quas. Modi, illum autem!',
    to: '/',
    image: 'https://picsum.photos/id/120/300/400',
  },
  {
    id: 'Nice-2221',
    user: {
      name: 'Nabil Komix',
      avatar: 'https://i.pravatar.cc/100?img=12',
    },
    title: 'hello world',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem adipisci architecto fuga numquam impedit nobis cupiditate, dolore laudantium consequatur voluptates porro mollitia illum. Aliquid dolore minus quas. Modi, illum autem!',
    to: '/',
    image: 'https://picsum.photos/id/121/300/400',
  },
  {
    id: 'Nice-2221',
    user: {
      name: 'Nabil T9alya Tomass Edicon helocopter fair main laqin',
      avatar: 'https://i.pravatar.cc/100?img=13',
    },
    title: 'More than 2 lines Title need to be Truncated For No Too long Article ',
    description:
      'Also too Long Description neeed to be trucated also For more readable article that has a good height here we go you can see it know nice catch thanks Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem adipisci architecto fuga numquam impedit nobis cupiditate, dolore laudantium consequatur voluptates porro mollitia illum. Aliquid dolore minus quas. Modi, illum autem!',
    to: '/',
    image: 'https://picsum.photos/id/122/300/400',
  },
]
