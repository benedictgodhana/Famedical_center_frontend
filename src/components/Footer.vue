<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="contact-details">
            <h3>Contact Us</h3>
            <p>Email: famedical82@gmail.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div class="location">
            <h3>Location</h3>
            <p>Riara,</p>
            <p>Nairobi,Kenya</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: purple;
    color: white;
    padding: 30px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
  }
  
  .contact-details,
  .location {
    flex: 1;
  }
  
  .contact-details h3,
  .location h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .contact-details p,
  .location p {
    margin: 5px 0;
    text-transform: capitalize;
  }
  </style>
  