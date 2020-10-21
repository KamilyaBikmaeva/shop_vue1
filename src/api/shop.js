
const _products = [
  {
    id: 1,
    title: 'Кольцо из вольфрама тонкое',
    price: 100.00,
    category: 'rings',
    sale: false,
    img: 'ring1.jpg',
    inventory: 2
  },
  {
    id: 2,
    title: 'Joseph мужской ремень',
    price: 49.99,
    category: 'belts',
    sale: false,
    img: 'Joseph.jpg',
    inventory: 20
  },
  {
    id: 3,
    title: 'Leonard ремень из натуральной кожи',
    price: 39.00,
    category: 'belts',
    sale: true,
    img: 'Leonard.jpg',
    inventory: 20
  },
  {
    id: 4,
    title: 'Larox мужской ремень двухсторонний',
    price: 60.00,
    category: 'belts',
    sale: true,
    img: 'Larox.jpg',
    inventory: 20
  },
  {
    id: 5,
    title: 'Mathew ремень из натуральной кожи',
    price: 44.99,
    category: 'belts',
    sale: false,
    img: 'Mathew.jpg',
    inventory: 5
  },
  {
    id: 6,
    title: 'Кольцо из стали подвижное анти-стресс',
    price: 58.99,
    category: 'rings',
    sale: true,
    img: 'ring2.jpg',
    inventory: 20
  },
  {
    id: 7,
    title: 'Кожаный ремень двухсторонний',
    price: 39.00,
    category: 'belts',
    sale: false,
    img: 'Mathew1.jpg',
    inventory: 20
  },
  {
    id: 8,
    title: 'Кольцо из вольфрама',
    price: 20.90,
    category: 'rings',
    sale: false,
    img: 'ring3.jpg',
    inventory: 1
  },
  {
    id: 9,
    title: 'Ремень из натуральной кожи',
    price: 70.00,
    category: 'belts',
    sale: true,
    img: 'belt1.jpg',
    inventory: 20
  },
  {
    id: 13,
    title: 'Печатка кубизм черная из стали',
    price: 69.00,
    category: 'rings',
    sale: false,
    img: 'ring5.jpg',
    inventory: 20
  },
  {
    id: 14,
    title: 'Кольцо из вольфрама ',
    price: 29.99,
    category: 'rings',
    sale: true,
    img: 'ring4.jpg',
    inventory: 20
  },
  {
    id: 15,
    title: 'Кожаный ремень двухсторонний',
    price: 35.90,
    category: 'belts',
    sale: false,
    img: 'belt.jpg',
    inventory: 20
  },
  {
    id: 16,
    title: 'Печатка в минимализме из стали ',
    price: 45.99,
    category: 'rings',
    sale: true,
    img: 'ring6.jpg',
    inventory: 20
  },
  {
    id: 17,
    title: 'Кольцо из стали подвижное анти-стресс ',
    price: 89.99,
    category: 'rings',
    sale: true,
    img: 'ring7.jpg',
    inventory: 20
  },
  {
    id: 18,
    title: 'Кольцо вольфрамовое ',
    price: 69.99,
    category: 'rings',
    sale: true,
    img: 'ring8.jpg',
    inventory: 20
  },
  {
    id: 19,
    title: 'Кольцо из вольфрама обручальное ',
    price: 55.99,
    category: 'rings',
    sale: true,
    img: 'ring9.jpg',
    inventory: 20
  },
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.0000001 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
