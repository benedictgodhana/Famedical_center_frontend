<template>
  <v-navigation-drawer v-model="sidebar" app class="sidebar-drawer" style="background-color:white;">
    <v-list nav>
      <!-- Dashboard -->
      <v-list-item to="/admin" prepend-icon="mdi-view-dashboard" title="Dashboard" color="white" elevation="0" active-class="active-button">
      </v-list-item>

      <!-- Manage Users -->
      <v-list-item to="/admin/manage-users" prepend-icon="mdi-account-group" color="white" title="Manage Users"  elevation="0" active-class="active-button">
      </v-list-item>
      <v-list-item to="/admin/manage-employees" prepend-icon="mdi-doctor" color="white" title="Manage Doctors"  elevation="0" active-class="active-button">
        
      </v-list-item>

      <!-- Manage Services -->
      <v-list-item to="/admin/manage-services" prepend-icon="mdi-briefcase" color="white" title="Manage  Services"  elevation="0" active-class="active-button">
        
      </v-list-item>

      <!-- Manage Bookings -->
      <v-list-item to="/admin/manage-bookings" prepend-icon="mdi-calendar-clock" color="white" title="Manage Bookings"   elevation="0" active-class="active-button">
      
      </v-list-item>

      <!-- Manage Reviews -->
      <v-list-item to="/admin/manage-reviews" prepend-icon="mdi-star" color="white" title="Manage Reviews"  elevation="0" active-class="active-button">
        
      </v-list-item>

      <!-- Manage Payments -->
      <v-list-item to="/admin/manage-payments" prepend-icon="mdi-currency-usd" color="white" title="Manage Payments"   elevation="0" active-class="active-button">
      </v-list-item>
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
  color: blue; /* Customize active button color */
  background: purple;
}
</style>
