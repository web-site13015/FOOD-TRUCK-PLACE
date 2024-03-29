const axios = require('axios');

const adAccountId = '20c11c29-6349-4635-9610-e7d77d3ec316';
const endpoint = `https://adsapi.snapchat.com/v1/adaccounts/${adAccountId}/media`;

axios.get(endpoint, {
  headers: {
    'Authorization': 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNjU0MDIzMTU2LCJzdWIiOiIyMGMxMWMyOS02MzQ5LTQ2MzUtOTYxMC1lN2Q3N2QzZWMzMTZ-UFJPRFVDVElPTn4zZWRjZWM1Yi0xY2VkLTQ1ZDMtYTQ3OS0yNGVmYmQ2ZGM4OWYifQ.Fn-pmhydMe6tKrlMS6MLYsSs3z0jT1ShnLdmnNE9a8s',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});










setTimeout(function(){
  document.querySelector('.notification').style.display = 'none';
}, 2000);





// Sélectionner toutes les images
const images = document.querySelectorAll('.item img');

// Parcourir toutes les images
images.forEach(image => {
  let viewCount = 0; // Initialiser le compteur de clics à 0
  const viewCountElement = image.parentElement.nextElementSibling.querySelector('.view-count'); // Sélectionner l'élément du compteur de clics

  // Ajouter un événement de clic à chaque image
  image.addEventListener('click', function() {
    viewCount++; // Incrémenter le compteur de clics
    viewCountElement.textContent = viewCount; // Mettre à jour le texte du compteur de clics
  });
});
