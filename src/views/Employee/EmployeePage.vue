<template>
    <div>
      <Navbar></Navbar>
     <EmployeeSidebar/>

     <div class="count-cards-container">
        <!-- Cards displaying the counts -->
        <user-count-card :userCount="userCount" />
        <employee-count-card :employeeCount="employeeCount" />
        <customer-count-card :customerCount="customerCount" />
        <service-count-card :serviceCount="serviceCount" />
        <payment-count-card :paymentCount="paymentCount" />

      </div>
      
    </div>
  </template>
  
  <script>
  import axiosInstance from '@/service/api';
  import Navbar from '@/components/AdminNavbar.vue';
  import EmployeeSidebar from '@/components/EmployeeSidebar.vue';
  import AdminSidebar from '@/components/AdminSidebar.vue';
  import AdminNavbar from '@/components/AdminNavbar.vue';
  import UserCountCard from '@/components/UserCountCard.vue';
  import EmployeeCountCard from '@/components/EmployeeCountCard.vue';
  import CustomerCountCard from '@/components/CustomerCountCard.vue';
  import ServiceCountCard from '@/components/ServiceCountCard.vue';
  import PaymentCountCard from '@/components/PaymentCountCard.vue';


  
  export default {
    components: {
      Navbar,
      EmployeeSidebar,
      UserCountCard,
      EmployeeCountCard,
      CustomerCountCard,
      ServiceCountCard,
      PaymentCountCard
    },
    
  };
  </script>
  
  <style scoped>
  /* Flex container for count cards */
  .count-cards-container {
    display: flex;
    margin-left:10px;
    margin-top: 20px; /* Optional margin */
  }
  </style>
  