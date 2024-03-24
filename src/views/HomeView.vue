<template>
  <div>
<Navbar></Navbar>
<v-carousel :show-arrows="false" cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
  <v-sheet class="mx-auto" elevation="23" max-width="100%">
    <v-slide-group v-model="selectedDoctor" class="pa-4" show-arrows cycle style="margin-left:120px">
      <v-slide-group-item v-for="(doctor, index) in doctors" :key="index" >
        <v-card
          color="grey-lighten-1"
          class="ma-4"
          height="500"
          width="340"
          @click="openDoctorDetails(doctor)"
          elevation="10"
          style="border-radius: 10px;"
        >
        <v-card-text style="background-color: purple;color:white">            
          <h4>{{ doctor.name }}</h4>
        </v-card-text>
          <v-img
            :src="doctor.image"
            width="100%"
            height="100%"
            contain
           
          ></v-img>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-dialog v-model="dialog" max-width="600">
      <v-card style="border-radius: 10px;">
        <v-card-title style="background-color: purple;color:white">{{ selectedDoctor.name }}</v-card-title><br>
        <v-card-subtitle style="text-align: center; font-size: 16px;font-weight: 700;">{{ selectedDoctor.specialization }}</v-card-subtitle>
        <v-card-text>{{ selectedDoctor.description }}</v-card-text>
        <v-divider></v-divider>
        <v-card-subtitle style="text-align: center; font-size: 16px;font-weight: 700;">Schedule</v-card-subtitle>
        <v-list>
          <v-list-item v-for="(time, index) in selectedDoctor.schedule" :key="index">
            <v-list-item-content>{{ time }}</v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn color="purple"><v-icon>mdi-calendar</v-icon>Book AN Appointment</v-btn>
      </v-card>
    </v-dialog>
  </v-sheet>
 
 

  
  </div>
</template>
<script setup>
import { ref } from 'vue';

import Navbar from '../components/Navbar.vue';



const selectedDoctor = ref(null);

const selectedArticle = ref(null);
const articleDialog = ref(false);


const dialog = ref(false);


const articles = [
  {
    title: 'Heart Wellness',
    subtitle: 'How to take care of your heart to avoid any complications',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...', // Add your article content here
  },
  {
    title: 'Epic Adventures in Open Worlds',
    subtitle: 'Embark on a journey through vast, immersive landscapes and quests.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...', // Add your article content here
  },
  // Add more articles as needed
];

const games= [
{
          img: 'the-hearts-electrical-system-2x.jpg',
          title: 'Heart Wellness',
          subtitle: 'How to take care of your heart to avoid any complications',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...', // Add your article content here
          advanced: false,
          duration: '8 minutes',
          notes:'',
        },
        {
          img: '',
          title: 'Epic Adventures in Open Worlds',
          subtitle: 'Embark on a journey through vast, immersive landscapes and quests.',
          advanced: true,
          duration: '10 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png',
          title: 'Surviving the Space Station Horror',
          subtitle: 'Navigate a haunted space station in this chilling survival horror game.',
          advanced: false,
          duration: '9 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png',
          title: 'Neon-Lit High-Speed Racing Thrills',
          subtitle: 'Experience adrenaline-pumping races in a futuristic, neon-soaked city.',
          advanced: true,
          duration: '12 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png',
          title: 'Retro-Style Platformer Adventures',
          subtitle: 'Jump and dash through pixelated worlds in this classic-style platformer.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...', // Add your article content here
          advanced: false,
          duration: '11 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png',
          title: 'Medieval Strategic War Campaigns',
          subtitle: 'Lead armies into epic battles and conquer kingdoms in this strategic game.',
          advanced: true,
          duration: '10 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png',
          title: 'Underwater VR Exploration Adventure',
          subtitle: 'Dive deep into the ocean and discover the mysteries of the underwater world.',
          advanced: true,
          duration: '11 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
          title: '1920s Mystery Detective Chronicles',
          subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
          advanced: false,
          duration: '9 minutes',
        },
];

const doctors = [
  {
    name: 'Dr. Julius Mwathuma',
    specialization: 'Cardiology',
    description: 'Cardiology focuses on the diagnosis and treatment of heart and circulatory system disorders. Dr. Julius Mwathuma, a cardiologist, specializes in managing conditions like heart disease. His expertise ensures comprehensive care for patients with cardiovascular issues, promoting overall heart health.',
    image: '/portrait-successful-young-doctor-with-folder-stethoscope.jpg',
    schedule: ['Monday 9:00 AM - 5:00 PM', 'Wednesday 1:00 PM - 7:00 PM'],
  },
  {
    name: 'Dr. Anita Mwendee',
    specialization: 'Physiotherapy',
    description: 'Physiotherapy, or physical therapy, is a healthcare profession dedicated to enhancing and restoring physical functionality and mobility. Our skilled physiotherapists employ various therapeutic techniques to address musculoskeletal issues, injuries, and disabilities. Dr.Anita Mwendee, a seasoned physiotherapist, specializes in creating personalized rehabilitation programs. His commitment ensures patients receive targeted care, promoting recovery, and improving overall physical well-being.',
    image: '/medium-shot-smiley-doctor-with-coat.jpg',
    schedule: ['Monday 9:00 AM - 5:00 PM', 'Wednesday 1:00 PM - 7:00 PM'],
  },
  {
    name: 'Dr. Jack Muthoni',
    specialization: 'Bacteriology',
    description: 'Bacteriology is the branch of microbiology that explores the world of bacteria. Dr. Jack Muthoni, an expert bacteriologist, delves into the study of bacteria to understand their characteristics, behaviors, and impact on human health. With a focus on preventing and treating bacterial infections,he contributes to advancements in medical science, ensuring a safer and healthier future for patients.',
    image: '/front-view-smiley-man-wearing-lab-coat.jpg',
    schedule: ['Monday 9:00 AM - 5:00 PM', 'Wednesday 1:00 PM - 7:00 PM'],
  },
  {
    name: 'Dr. Halima Kofa',
    specialization: 'Nutriation',
    description: 'Nutrition is the science that investigates the interactions between living organisms and the substances they consume for sustenance. Dr.Halima Kofa, a dedicated nutritionist, specializes in guiding individuals towards optimal health through balanced diets and personalized nutritional plans. With a focus on preventing and managing health conditions through proper nutrition, she plays a crucial role in promoting overall well-being and longevity for patients.',
    image: '/woman-with-dreadlocks-dark-skinned-doctor-woman-hospital-gown.jpg',
    schedule: ['Monday 9:00 AM - 5:00 PM', 'Wednesday 1:00 PM - 7:00 PM'],
  },
 
  // Add more doctors as needed
];



const openArticleDetails = (article) => {
  selectedArticle.value = article;
  articleDialog.value = true;
};


const openDoctorDetails = (doctor) => {
  selectedDoctor.value = doctor;
  dialog.value = true;
};

const model = ref(null);

const items = [
  {
    src: 'doctor-writing-patient-daily-report-exmaination.jpg',
   
  },
  {
    src: 'medical-banner-with-doctor-wearing-goggles.jpg',
  },
  {
    src: 'empty-hallway-background.jpg',
  },

  

  
];
</script>
	
