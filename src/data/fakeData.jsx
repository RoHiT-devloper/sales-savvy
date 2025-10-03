// src/data/fakeData.js
export const fakeProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2999,
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics",
    reviews: ["Great sound quality!", "Comfortable for long use"],
    rating: 4.5,
    stock: 25
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 5999,
    description: "Advanced fitness tracker with heart rate monitoring and GPS.",
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Electronics",
    reviews: ["Accurate tracking", "Good battery life"],
    rating: 4.3,
    stock: 15
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 899,
    description: "100% organic cotton t-shirt, comfortable and eco-friendly.",
    photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "Clothing",
    reviews: ["Soft fabric", "True to size"],
    rating: 4.7,
    stock: 50
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 1299,
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
    photo: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    category: "Lifestyle",
    reviews: ["Keeps water cold", "Leak proof"],
    rating: 4.8,
    stock: 30
  }
];

export const fakeUsers = [
  {
    id: 1,
    username: "admin",
    email: "admin@salesavvy.com",
    role: "admin",
    gender: "male",
    dob: "1985-03-15",
    status: "active"
  },
  {
    id: 2,
    username: "john_doe",
    email: "john.doe@email.com",
    role: "customer",
    gender: "male",
    dob: "1990-07-22",
    status: "active"
  },
  {
    id: 3,
    username: "sarah_miller",
    email: "sarah.m@email.com",
    role: "customer",
    gender: "female",
    dob: "1992-11-08",
    status: "active"
  }
];

export const fakeOrders = [
  {
    id: 1,
    orderId: "ORD-001",
    username: "john_doe",
    customerName: "John Doe",
    customerEmail: "john.doe@email.com",
    status: "DELIVERED",
    totalAmount: 4598,
    orderDate: "2024-01-15T10:30:00Z",
    shippingAddress: "123 Main Street, Mumbai, Maharashtra 400001",
    items: [
      { productName: "Wireless Bluetooth Headphones", quantity: 1, price: 2999 },
      { productName: "Wireless Phone Charger", quantity: 1, price: 1599 }
    ]
  },
  {
    id: 2,
    orderId: "ORD-002",
    username: "sarah_miller",
    customerName: "Sarah Miller",
    customerEmail: "sarah.m@email.com",
    status: "SHIPPED",
    totalAmount: 5999,
    orderDate: "2024-01-16T14:45:00Z",
    shippingAddress: "456 Park Avenue, Delhi 110001",
    items: [
      { productName: "Smart Fitness Watch", quantity: 1, price: 5999 }
    ]
  }
];

export const fakeCartItems = [
  {
    id: 1,
    productId: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2999,
    quantity: 1,
    photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  },
  {
    id: 2,
    productId: 3,
    name: "Organic Cotton T-Shirt",
    price: 899,
    quantity: 2,
    photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
  }
];

export const fakeWishlistItems = [
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 5999,
    category: "Electronics",
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
  }
];