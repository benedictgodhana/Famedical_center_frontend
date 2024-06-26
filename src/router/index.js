import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Events from '../views/UpcomingEvents.vue'
import WelcomePage from '../views/Customer/welcomepage.vue'
import AdminDashboard from '../views/Admin/DashboardPage.vue'
import EmployeePage from '../views/Employee/EmployeePage.vue'
import ManageUsers from '../views/Admin/ManageUsers.vue'
import ManageServices from '../views/Admin/ManageServices.vue'
import ManageBookings from '../views/Admin/ManageBookings.vue'
import ManageEmployees from '../views/Admin/ManageEmployees.vue'
import Bookings from '../views/Employee/ManageBookings.vue'
import ManageReviews from '../views/Admin/ManageReviews.vue';
import ManagePayments from '../views/Admin/PaymentTransactions.vue';
import MyBookings from '../views/Customer/MyBookings.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import PasswordReset from '../views/PasswordReset.vue';











const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/password-reset/:token',
      name: 'password-reset',
      component: PasswordReset
    },
    
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{auth:false}
    },
    {
      path: '/forgot_password',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta:{auth:false}
    },
    {
      path: '/doctor',
      name: 'EmployeePage ',
      component:EmployeePage ,
      meta: { requiresAuth: true },
    },
    {
      path: '/my-bookings',
      name: 'MyBookings ',
      component:MyBookings,
      meta: { requiresAuth: true },
    },
    {
      path: '/welcomepage',
      name: 'WelcomePage',
      component: WelcomePage,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin',
      name: 'AdminDashboard',
      component: AdminDashboard,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/manage-users',
      name: 'ManageUsers',
      component: ManageUsers,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/manage-employees',
      name: 'ManageEmployees',
      component: ManageEmployees,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/manage-services',
      name: 'ManageServices',
      component: ManageServices,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/manage-bookings',
      name: 'ManageBookings',
      component: ManageBookings,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/manage-reviews',
      name: 'ManageReviews',
      component: ManageReviews,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/manage-payments',
      name: 'ManagePayment',
      component: ManagePayments,
      meta: { requiresAuth: true },
    },
    {
      path: '/employee/manage-bookings',
      name: 'Bookings',
      component: Bookings,
      meta: { requiresAuth: true },
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router
