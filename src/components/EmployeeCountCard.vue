<template>
  <v-card style="margin: 8px; border-radius: 10px;" variant="outlined" height="200" elevation="3" width="300">
    <v-img src="/employee_11802935.png" height="50" style="margin-top: 10px;" contain></v-img>

    <v-card-title style="font-size: 14px;">Number of Doctors</v-card-title>
    <v-card-text>{{ employeeCount }}</v-card-text>

    <v-card-actions>
      <v-btn color="white" to="/admin/manage-employees" style="background:purple; width: 100%; text-transform: lowercase;">
        <v-icon>mdi-link</v-icon>View Doctors
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// Import your Axios instance
import axiosInstance from '../service/api'; // Import the Axios instance

export default {
  data() {
    return {
      employeeCount: 0 // Initialize employee count
    };
  },
  created() {
    this.fetchEmployees();
  },
  methods: {
    async fetchEmployees() {
      try {
        // Use axiosInstance instead of axios
        const response = await axiosInstance.get('/employees/count');
        // Make sure to adjust the response according to your backend setup
        this.employeeCount = response.data.employee_count; // Assign count to employeeCount
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    }
  }
};
</script>
