<template>
    <div>
      <Navbar></Navbar>
      <v-container>
        <v-carousel cycle height="300" hide-delimiters  hide-navigation  :show-arrows="false">
          <v-carousel-item v-for="(item, index) in carouselItems" :key="index" show-arrows="false">
            <v-sheet
              height="500"
              class="d-flex align-center justify-center"
            >
              <v-img :src="item.imageUrl" cover ></v-img>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-card elevation="2">
          <v-card-title class="headline">About Famedical Clinic</v-card-title>
          <v-card-text>
            Famedical Clinic is a leading healthcare provider dedicated to delivering exceptional medical services to individuals and families in our community. With a team of highly skilled healthcare professionals and state-of-the-art facilities, we offer a comprehensive range of medical services to address the diverse needs of our patients.
            At Famedical Clinic, we prioritize patient care and strive to create a warm and welcoming environment where patients feel valued and supported throughout their healthcare journey. Whether you require routine medical care, specialized treatments, or preventive services, our team is committed to delivering personalized care tailored to your unique needs.
            Our mission is to promote health and wellness, improve quality of life, and empower individuals to lead healthier and happier lives. We believe in fostering strong relationships with our patients built on trust, compassion, and respect.
            Thank you for choosing Famedical Clinic as your trusted healthcare partner. We look forward to serving you and your family with excellence and compassion.
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
      };
    },
  };
  </script>
  