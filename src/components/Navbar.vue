<template>
  
  <v-app-bar app height="90" style="background:purple;color:white;">

     
       
       <v-header>       


       
       </v-header>
       <!-- Logo with separator -->
       <v-btn style="font-weight: 500;" icon @click="sidebar = !sidebar" class="hidden-md-and-up">
         <v-icon size="16">mdi-menu</v-icon>
       </v-btn>
       <v-spacer></v-spacer>
       
       <!-- Navigation buttons for larger screens -->
     
       <v-btn style="margin-left:540px; font-weight: 500;font-family: 'poppins';text-transform: lowercase;"  text to="/" class="hidden-sm-and-down">
         <v-icon size="16">mdi-home</v-icon>Home
       </v-btn>
       <v-btn style="margin:2px;font-weight: 500;font-family: 'poppins';text-transform: lowercase;"  text to="/about" class="hidden-sm-and-down">
         <v-icon size="16">mdi-information</v-icon> About
       </v-btn>
       
       
      
       
       <v-btn  style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;" text to="/contact" class="hidden-sm-and-down">
         <v-icon size="16">mdi-phone</v-icon>Contact
       </v-btn>
       <v-btn  @click="showSignUpModal" style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;"  class="hidden-sm-and-down">
         <v-icon size="16">mdi-account-plus</v-icon> Register
       </v-btn>

       
       <!-- Button to open the sidebar on small screens -->
       
       <v-btn style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;" @click="showSignInModal" class="hidden-sm-and-down">
         <v-icon size="16">mdi-account</v-icon>Login
       </v-btn>
         
   </v-app-bar>
   <!-- Sidebar for small screens -->
   <v-navigation-drawer v-model="sidebar" app class="sidebar-drawer">
 <v-list nav>
  <v-list-item prepend-icon="mdi-home" to="/" title="Home" value="inbox" active-class="active-button"></v-list-item>
  <v-list-item prepend-icon="mdi-information" to="/about" title="About" value="inbox" active-class="active-button"></v-list-item>
  <v-list-item prepend-icon="mdi-email" to="/contact" title="Contact" value="inbox" active-class="active-button"></v-list-item>
  <v-list-item prepend-icon="mdi-account-plus" @click="showSignUpModal" title="Register" value="inbox" active-class="active-button"></v-list-item>
  <v-list-item prepend-icon="mdi-account"  @click="showSignInModal" title="Login" value="inbox" active-class="active-button"></v-list-item>
 </v-list>
</v-navigation-drawer>
<v-alert ref="loginSuccessAlert" type="success" dismissible v-model="loginSuccessAlertVisible">
  Login Successful!
</v-alert>

<v-alert ref="registerSuccessAlert" type="success" dismissible v-model="registerSuccessAlertVisible">
  Registration Successful!
</v-alert>




 <!-- Sign In Modal -->
 <v-dialog v-model="signInModal" max-width="600px">
  <v-card style="border-radius:2px" elevation="4">
    <v-card-title class="text-center" style="font-weight: 800;">Sign In</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="signIn">
        <v-text-field v-model="signInData.email" label="Email" required variant="outlined"></v-text-field>
        <v-text-field v-model="signInData.password" label="Password" type="password" required variant="outlined"></v-text-field>
        <!-- Login button with loading state -->
        <v-btn :loading="loading" type="submit" color="purple" style="width: 100%; text-transform: lowercase;">
          <v-icon left style="margin: 3px;">mdi-login</v-icon>
          Login
        </v-btn>
        <!-- Forgot password link -->
        <div class="text-center mt-2">
          <a href="/forgot_password" @click="forgotPassword">Forgot Password?</a>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</v-dialog>




 <!-- Sign Up Modal -->
 <v-dialog v-model="signUpModal" max-width="700px">
  <v-card style="border-radius: 10px;" elevation="4" height="100%">
    <v-card-title class="text-center" style="color:black;font-weight: 800;">Sign Up</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="signUp">
        <v-text-field v-model="signUpData.name" label="Name" required variant="outlined"></v-text-field>
        <v-text-field v-model="signUpData.email" label="Email" required variant="outlined"></v-text-field>
        <v-text-field v-model="signUpData.password" label="Password" type="password" required variant="outlined"></v-text-field>
        <v-text-field v-model="signUpData.passwordConfirmation" label="Confirm Password" type="password" required variant="outlined"></v-text-field>
        <v-btn :loading="loading"  type="submit" color="purple" style="width: 100%;">
          <v-icon>mdi-account-plus</v-icon> Sign Up
        </v-btn>
      </v-form>
     
    </v-card-text>
  </v-card>
</v-dialog>





</template>

<script>
import axiosInstance from '../service/api';


export default {


 
name: 'App',
data() {
 return {
  loginSuccessAlertVisible: false, // Initially set to false
  registerSuccessAlertVisible: false, // Initially set to false
  loading: false, // Add loading state
   sidebar: false,
   scrolled: false,
   isAuthenticated: false,
   signInModal: false,
   signUpModal: false,
   signUpData: {
    name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
   },
   signInData: {
     email: '',
     password: ''
   },
   currentLanguage: 'en' // Initialize with English
 };
},

mounted() {
 

 
   window.addEventListener('scroll', this.handleScroll);
 },
 beforeDestroy() {
   window.removeEventListener('scroll', this.handleScroll);
 },
methods: {

 

 handleScroll() {
     // Check if user has scrolled beyond a certain threshold
     this.scrolled = window.scrollY > 50; // Change '50' to the desired scroll threshold
   },
 showSignInModal() {
   this.signInModal = true;
 },
 showSignUpModal() {
   this.signUpModal = true;
 },
 toggleLanguage() {
 // Toggle between English and Pokomo
 this.currentLanguage = this.currentLanguage === 'english' ? 'pokomo' : 'english';
 // Use Languages.js to set the current language
 Languages.setLanguage(this.currentLanguage);
},

 signInWithGoogle() {
 // Load Google API library
 gapi.load('auth2', () => {
   // Initialize GoogleAuth object
   const auth2 = gapi.auth2.init({
     client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
     scope: 'profile email'
   });

   // Sign in the user with Google
   auth2.signIn().then(googleUser => {
     // Retrieve user details
     const profile = googleUser.getBasicProfile();
     const email = profile.getEmail();
     // Now you can handle the sign-in with Google user data as you like
     // For example, you can send the email to your backend for authentication
     this.signInData.email = email;
     // Optionally, close the sign-in dialog
     this.signInModal = false;
   }).catch(error => {
     console.error('Google sign-in error:', error);
   });
 });
},
signIn() {
  this.loading = true;
  axiosInstance.post('/login', this.signInData)
    .then(response => {
      const token = response.data.token;
      const role = response.data.role;
      const user = response.data.user; // Assuming user details are returned in the response

      // Save token, role, and user details to local storage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(user));

      // Show login success alert
      this.loginSuccessAlertVisible = true;

      // Hide the alert after 2 seconds
      setTimeout(() => {
        this.loginSuccessAlertVisible = false;
      }, 2000);

      // Redirect based on user's role
      if (role === 'admin') {
        this.$router.push('/admin');
      } else if (role === 'student') {
        this.$router.push('/welcomepage');
      } else if (role === 'doctor') {
        this.$router.push('/doctor');
      }

      // Set authorization header for future requests
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      this.signInModal = false;
    })
    .catch(error => {
      console.error('Authentication failed:', error.response.data.error);
      this.$swal({
        icon: 'error',
        title: 'Authentication Failed',
        text: error.response.data.error
      });
    })
    .finally(() => {
      this.loading = false;
    });
},



    signUp() {
      this.loading = true; // Set loading to true during sign up
      axiosInstance.post('/register', this.signUpData)
        .then(response => {
          console.log('Sign-up successful:', response.data);
          // Show register success alert
          this.registerSuccessAlertVisible = true;

          // Hide the alert after 2 seconds
          setTimeout(() => {
            this.registerSuccessAlertVisible = false;
          }, 2000);
        })
        .catch(error => {
          console.error('Sign-up failed:', error.response.data);
        })
        .finally(() => {
          this.loading = false;
          this.signUpModal = false;
        });
    }

},
watch: {
 // Watch for changes in the router's current route
 '$route'(to, from) {
   // Hide modals when the route changes
   this.signInModal = false;
   this.signUpModal = false;
 }
}


};
</script>

<style>
.sidebar-button {
   text-align: left;
   width: 97%;
   margin: 4px;
 }
 .active-button {
   color: blue !important;
 }

.logo-title-container {
display: flex;
align-items: center;
}

.logo {
height: 50px; /* Adjust the height as needed */
margin-right: 10px; /* Add some margin between logo and title */
}
.lowercase {
text-transform: lowercase;
}

.sidebar-drawer {
 background-color: #282c34; /* Change to your desired background color */
}

.sidebar-item {
 color: black; /* Change to your desired text color */
}

.sidebar-item:hover {
 background-color: #3d4451; /* Change to your desired hover color */
}
.newsletter-subscribe {
 color:#313437;
 padding:50px 0;
 background:#313437;
 border-radius: 180px 180px 0px 0px;
}

.newsletter-subscribe p {
 color:#7d8285;
 line-height:1.5;
}

.newsletter-subscribe h2 {
 font-size:24px;
 font-weight:bold;
 margin-bottom:25px;
 line-height:1.5;
 padding-top:0;
 margin-top:0;
 color:inherit;
}

.newsletter-subscribe .intro {
 font-size:16px;
 max-width:500px;
 margin:0 auto 25px;
}

.newsletter-subscribe .intro p {
 margin-bottom:35px;
}

.newsletter-subscribe form {
 justify-content:center;
}

.newsletter-subscribe form .form-control {
 background:#eff1f4;
 border:none;
 border-radius:3px;
 box-shadow:none;
 outline:none;
 color:inherit;
 text-indent:9px;
 height:45px;
 margin-right:10px;
 min-width:250px;
}

.newsletter-subscribe form .btn {
 padding:16px 32px;
 border:none;
 background:none;
 box-shadow:none;
 text-shadow:none;
 opacity:0.9;
 text-transform:uppercase;
 font-weight:bold;
 font-size:13px;
 letter-spacing:0.4px;
 line-height:1;
}

.newsletter-subscribe form .btn:hover {
 opacity:1;
}

.newsletter-subscribe form .btn:active {
 transform:translateY(1px);
}

.newsletter-subscribe form .btn-primary {
 background-color:#055ada !important;
 color:#fff;
 outline:none !important;
}


.down-logo{
 margin-left:-82px;
} 
.header-info {
 font-size: 14px;
 color:black; /* Adjust color as needed */
 display: flex;
 align-items: center;
 padding-left: 20px;
 background: gold;
}



.custom-divider {
 width: 2px;
 height: 40px; /* Adjust height as needed */
 background-color: black;
 margin: 0 5px;
}
p{
 font-size: 19px;
 text-decoration: none;

}
@media (max-width: 880px) {
 .down-logo{
 margin-left:0px;
}
.newsletter-subscribe {
 color:#313437;
 padding:50px 0;
 background:#313437;
 border-radius: 18px 18px 0px 0px;
}
}


</style>
