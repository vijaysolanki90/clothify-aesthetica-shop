
import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "T-Shirts",
    description: "A timeless white t-shirt made from 100% organic cotton. Features a comfortable fit and durable construction that will last through countless wears and washes."
  },
  {
    id: 2,
    name: "Slim Fit Black Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541085388148-a28cfd9f4890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Jeans",
    description: "Premium black jeans with a modern slim fit. Made with a touch of stretch for comfort and mobility throughout your day."
  },
  {
    id: 3,
    name: "Striped Button-Up Shirt",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Shirts",
    description: "A versatile striped button-up shirt perfect for both casual and formal occasions. Made from breathable cotton blend."
  },
  {
    id: 4,
    name: "Wool Blend Overcoat",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear",
    description: "A sophisticated wool blend overcoat that offers warmth without sacrificing style. Features a classic silhouette and premium construction."
  },
  {
    id: 5,
    name: "Leather Chelsea Boots",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Footwear",
    description: "Elegant leather Chelsea boots with elastic side panels. The perfect balance of comfort and style for any occasion."
  },
  {
    id: 6,
    name: "Designer Sunglasses",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    description: "Stylish polarized sunglasses with UV protection. Featuring a timeless design that complements any face shape."
  },
  {
    id: 7,
    name: "Cashmere Sweater",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1609873814058-a8928924184a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Knitwear",
    description: "Luxuriously soft cashmere sweater available in a range of colors. Perfect for staying warm and stylish during colder months."
  },
  {
    id: 8,
    name: "Leather Messenger Bag",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Bags",
    description: "A sophisticated leather messenger bag with multiple compartments. Perfect for work, travel, or everyday use."
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (id: number, category: string): Product[] => {
  return products
    .filter(product => product.id !== id && product.category === category)
    .slice(0, 4);
};
