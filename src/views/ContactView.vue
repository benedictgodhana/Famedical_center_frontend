<template>
    <div>
      <Navbar></Navbar>
      <v-container>
        <v-carousel cycle height="300" hide-delimiters hide-navigation :show-arrows="false">
          <v-carousel-item v-for="(item, index) in carouselItems" :key="index" show-arrows="false">
            <v-sheet
              height="500"
              class="d-flex align-center justify-center"
            >
              <v-img :src="item.imageUrl" cover ></v-img>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-card elevation="2" width="100%" style="max-width: 700px;">
          <v-card-title class="headline">Contact Famedical Clinic</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field v-model="name" label="Name" required></v-text-field>
              <v-text-field v-model="email" label="Email" required></v-text-field>
              <v-textarea v-model="message" label="Message" required></v-textarea>
              <v-btn color="primary" type="submit">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        carouselItems: [
          { imageUrl: '/doctor-writing-patient-daily-report-exmaination.jpg' }, // Update the image path
        ],
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        // Perform form submission logic here
        console.log('Form submitted');
        console.log('Name:', this.name);
        console.log('Email:', this.email);
        console.log('Message:', this.message);
        // You can send the form data to your backend API for processing
      }
    }
  };
  </script>
  