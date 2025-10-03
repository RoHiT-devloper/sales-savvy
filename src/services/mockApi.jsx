// src/services/mockApi.js
import {
  fakeProducts,
  fakeUsers,
  fakeOrders,
  fakeAnalytics,
  fakeCartItems,
  fakeWishlistItems,
  fakeAddresses,
  fakeReviews
} from '../data/fakeData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  // Auth endpoints
  signIn: async (credentials) => {
    await delay(1000);
    
    if (credentials.username === "admin" && credentials.password === "admin") {
      return {
        success: true,
        message: "Login successful!",
        user: {
          username: "admin",
          role: "admin",
          email: "admin@salesavvy.com"
        }
      };
    }
    
    if (credentials.username === "customer" && credentials.password === "customer") {
      return {
        success: true,
        message: "Login successful!",
        user: {
          username: "customer",
          role: "customer",
          email: "customer@example.com"
        },
        products: fakeProducts
      };
    }
    
    throw new Error("Invalid username or password");
  },

  signUp: async (userData) => {
    await delay(1500);
    return {
      success: true,
      message: "User registered successfully!"
    };
  },

  // Product endpoints
  getAllProducts: async () => {
    await delay(800);
    return fakeProducts;
  },

  addProduct: async (productData) => {
    await delay(1000);
    const newProduct = {
      ...productData,
      id: fakeProducts.length + 1,
      reviews: productData.reviews || []
    };
    fakeProducts.push(newProduct);
    return "Product added successfully!";
  },

  updateProduct: async (productData) => {
    await delay(1000);
    const index = fakeProducts.findIndex(p => p.id === productData.id);
    if (index !== -1) {
      fakeProducts[index] = { ...fakeProducts[index], ...productData };
      return "Product updated successfully!";
    }
    throw new Error("Product not found");
  },

  deleteProduct: async (productId) => {
    await delay(1000);
    const index = fakeProducts.findIndex(p => p.id === parseInt(productId));
    if (index !== -1) {
      fakeProducts.splice(index, 1);
      return "Product deleted successfully!";
    }
    throw new Error("Product not found");
  },

  searchProduct: async (id) => {
    await delay(500);
    const product = fakeProducts.find(p => p.id === parseInt(id));
    if (!product) throw new Error("Product not found");
    return product;
  },

  // User management
  getAllUsers: async () => {
    await delay(800);
    return fakeUsers;
  },

  deleteUser: async (userId) => {
    await delay(1000);
    const index = fakeUsers.findIndex(u => u.id === parseInt(userId));
    if (index !== -1) {
      fakeUsers.splice(index, 1);
      return "User deleted successfully!";
    }
    throw new Error("User not found");
  },

  // Orders
  getAllOrders: async () => {
    await delay(800);
    return fakeOrders;
  },

  updateOrderStatus: async (orderId, status) => {
    await delay(500);
    const order = fakeOrders.find(o => o.id === parseInt(orderId));
    if (order) {
      order.status = status;
      return "Order status updated successfully!";
    }
    throw new Error("Order not found");
  },

  // Analytics
  getAnalytics: async () => {
    await delay(1000);
    return fakeAnalytics;
  },

  // Cart
  getCart: async (username) => {
    await delay(500);
    return {
      username: username,
      items: fakeCartItems,
      total: fakeCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
  },

  addToCart: async (cartData) => {
    await delay(500);
    return "Product added to cart successfully!";
  },

  // Wishlist
  getWishlist: async (username) => {
    await delay(500);
    return fakeWishlistItems;
  },

  // Addresses
  getAddresses: async (username) => {
    await delay(500);
    return fakeAddresses;
  },

  // Reviews
  getProductReviews: async (productId) => {
    await delay(500);
    return fakeReviews.filter(review => review.productId === parseInt(productId));
  },

  getRatingSummary: async (productId) => {
    await delay(300);
    const reviews = fakeReviews.filter(review => review.productId === parseInt(productId));
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    return {
      averageRating: averageRating || 0,
      reviewCount: reviews.length
    };
  }
};