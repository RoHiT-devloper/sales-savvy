// src/data/fakeData.js
export const fakeProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2999,
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics",
    reviews: ["Great sound quality!", "Comfortable for long use", "Battery lasts long"],
    rating: 4.5,
    stock: 25
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 5999,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone notifications.",
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Electronics",
    reviews: ["Accurate tracking", "Good battery life", "Comfortable strap"],
    rating: 4.3,
    stock: 15
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 899,
    description: "100% organic cotton t-shirt, comfortable and eco-friendly. Available in multiple colors.",
    photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "Clothing",
    reviews: ["Soft fabric", "True to size", "Eco-friendly"],
    rating: 4.7,
    stock: 50
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 1299,
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    photo: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    category: "Lifestyle",
    reviews: ["Keeps water cold", "Leak proof", "Durable"],
    rating: 4.8,
    stock: 30
  },
  {
    id: 5,
    name: "Professional Camera Backpack",
    price: 4599,
    description: "Water-resistant camera backpack with customizable compartments for all your photography gear.",
    photo: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Photography",
    reviews: ["Spacious compartments", "Comfortable to carry", "Good protection"],
    rating: 4.6,
    stock: 12
  },
  {
    id: 6,
    name: "Wireless Phone Charger",
    price: 1599,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices with safety features.",
    photo: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    category: "Electronics",
    reviews: ["Charges quickly", "Sleek design", "Works perfectly"],
    rating: 4.4,
    stock: 40
  },
  {
    id: 7,
    name: "Yoga Mat Premium",
    price: 2499,
    description: "Non-slip yoga mat with excellent cushioning and alignment guides for perfect poses.",
    photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    category: "Fitness",
    reviews: ["Great grip", "Comfortable thickness", "Easy to clean"],
    rating: 4.9,
    stock: 20
  },
  {
    id: 8,
    name: "Ceramic Coffee Mug Set",
    price: 1799,
    description: "Set of 4 beautiful ceramic mugs, dishwasher and microwave safe with elegant design.",
    photo: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400",
    category: "Home & Kitchen",
    reviews: ["Beautiful design", "Good quality", "Perfect size"],
    rating: 4.5,
    stock: 35
  }
];

export const fakeUsers = [
  {
    id: 1,
    username: "admin_user",
    email: "admin@salesavvy.com",
    role: "admin",
    gender: "male",
    dob: "1985-03-15",
    status: "active",
    createdAt: "2023-01-15T10:30:00Z"
  },
  {
    id: 2,
    username: "john_doe",
    email: "john.doe@email.com",
    role: "customer",
    gender: "male",
    dob: "1990-07-22",
    status: "active",
    createdAt: "2023-02-20T14:45:00Z"
  },
  {
    id: 3,
    username: "sarah_miller",
    email: "sarah.m@email.com",
    role: "customer",
    gender: "female",
    dob: "1992-11-08",
    status: "active",
    createdAt: "2023-03-10T09:15:00Z"
  },
  {
    id: 4,
    username: "mike_chen",
    email: "mike.chen@email.com",
    role: "customer",
    gender: "male",
    dob: "1988-05-30",
    status: "active",
    createdAt: "2023-04-05T16:20:00Z"
  },
  {
    id: 5,
    username: "lisa_ray",
    email: "lisa.ray@email.com",
    role: "customer",
    gender: "female",
    dob: "1995-12-14",
    status: "active",
    createdAt: "2023-05-18T11:10:00Z"
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
  },
  {
    id: 3,
    orderId: "ORD-003",
    username: "mike_chen",
    customerName: "Mike Chen",
    customerEmail: "mike.chen@email.com",
    status: "PENDING",
    totalAmount: 3298,
    orderDate: "2024-01-17T09:15:00Z",
    shippingAddress: "789 Tech Park, Bangalore, Karnataka 560001",
    items: [
      { productName: "Organic Cotton T-Shirt", quantity: 2, price: 899 },
      { productName: "Stainless Steel Water Bottle", quantity: 1, price: 1299 }
    ]
  }
];

export const fakeAnalytics = {
  totalSales: 13895,
  totalOrders: 3,
  totalCustomers: 5,
  totalProducts: 8,
  monthlyRevenue: [
    { month: "Jan", revenue: 13895 },
    { month: "Dec", revenue: 25400 },
    { month: "Nov", revenue: 18750 },
    { month: "Oct", revenue: 22100 }
  ],
  topProducts: [
    { name: "Smart Fitness Watch", sales: 15 },
    { name: "Wireless Bluetooth Headphones", sales: 12 },
    { name: "Yoga Mat Premium", sales: 8 }
  ],
  customerDemographics: [
    { age: "18-25", percentage: 35 },
    { age: "26-35", percentage: 45 },
    { age: "36-45", percentage: 15 },
    { age: "45+", percentage: 5 }
  ]
};

export const fakeCartItems = [
  {
    id: 1,
    productId: 3,
    name: "Organic Cotton T-Shirt",
    price: 899,
    quantity: 2,
    photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
  },
  {
    id: 2,
    productId: 4,
    name: "Stainless Steel Water Bottle",
    price: 1299,
    quantity: 1,
    photo: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400"
  }
];

export const fakeWishlistItems = [
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 5999,
    category: "Electronics",
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    quantity: 1
  },
  {
    id: 5,
    name: "Professional Camera Backpack",
    price: 4599,
    category: "Photography",
    photo: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    quantity: 1
  }
];

export const fakeAddresses = [
  {
    id: 1,
    fullName: "John Doe",
    phoneNumber: "+91 9876543210",
    street: "123 Main Street",
    city: "Mumbai",
    state: "Maharashtra",
    zipCode: "400001",
    addressType: "HOME",
    isDefault: true,
    country: "India"
  },
  {
    id: 2,
    fullName: "John Doe",
    phoneNumber: "+91 9876543210",
    street: "456 Office Complex",
    city: "Mumbai",
    state: "Maharashtra",
    zipCode: "400002",
    addressType: "WORK",
    isDefault: false,
    country: "India"
  }
];

export const fakeReviews = [
  {
    id: 1,
    username: "john_doe",
    productId: 1,
    rating: 5,
    comment: "Excellent sound quality and very comfortable for long listening sessions!",
    verifiedPurchase: true,
    createdAt: "2024-01-10T14:30:00Z"
  },
  {
    id: 2,
    username: "sarah_miller",
    productId: 1,
    rating: 4,
    comment: "Good headphones, but the battery could last longer.",
    verifiedPurchase: true,
    createdAt: "2024-01-08T11:20:00Z"
  }
];