import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
import Products from '../components/pages/Products.vue';
import About from '../components/pages/About.vue';
import Contact from '../components/pages/Contact.vue';

const routes = [
  { 
    path: '/', 
    component: Home,
    meta: {
      title: "BTL Home Page"
    } 
  },
  { 
    path: '/products', 
    component: Products, 
    meta: {
      title: "Our Products",
    }
  },
  { 
    path: '/about', 
    component: About,
    meta: {
      title: "About us",
    }
  },
  { 
    path: '/contact', 
    component: Contact, 
    meta: {
      title: "Contact",
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Set up a global beforeEach guard to change the document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});

export default router;