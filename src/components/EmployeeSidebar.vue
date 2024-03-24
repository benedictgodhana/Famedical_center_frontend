<template>
     <v-navigation-drawer
        theme="light"
        permanent
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="inbox" to="/employee" color="white" active-class="active-button"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-time-five" title="Manage Appointments" value="supervisors" color="white"  to="/employee/manage-bookings" active-class="active-button"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"   elevation="0"></v-list-item>
        </v-list>
      </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sidebar: true, // Set sidebar to be open by default
      };
    },
  };
  </script>
  
  <style scoped>
  .sidebar-button {
    text-align: left;
    font-weight: 500;
    font-family: 'Poppins';
  }
  
  .active-button {
    color:white; /* Customize active button color */
    background:purple;
  }
  </style>
  