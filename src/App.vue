<script setup>
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <v-app>
    <v-main>
      <!-- Use v-if to conditionally render Navbar -->
      <RouterView />
    </v-main>
    
    <!-- Include the footer component -->
<Footer></Footer> 
 </v-app>
</template>
