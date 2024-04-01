// function myFunction(){
//     fetch(url("https://rapidapi.com/vitototti/api/amazon-pricing-and-product-info/")).then(response =>data).
// }

// async function logMovies() {
//     const response = await fetch("https://rapidapi.com/vitototti/api/amazon-pricing-and-product-info/");
//     const movies = await response.json();
//     console.log(movies);
//   }
  


  //one more way to try
// function priceCompre(){
// fetch('https://rapidapi.com/vitototti/api/amazon-pricing-and-product-info/')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
// }
// const cors = require('cors')
// app.use(cors())
// let p = fetch('https://rapidapi.com/vitototti/api/amazon-pricing-and-product-info/')
// p.then((value1) => {
//   return value1.json()
// }).then((value2) =>{
//   console.log(value2)
// })


//another way to try

// Importing required libraries
// const axios = require('axios');

// Function to fetch product information from the API
// async function getProductInfo(productId) {
//     try {
//         // API endpoint
//         const apiUrl = `https://amazon-product-info.p.rapidapi.com/product?id=${productId}`;

//         // Set up headers with API key
//         const headers = {
//             'x-rapidapi-host': 'amazon-product-info.p.rapidapi.com',
//             'x-rapid-key':'4308455532mshf236c29a3b2c97ep171863jsn1bf99e393059',
//              // Replace with your RapidAPI key
            
//             'content-type': 'application/json',
//             'accept': 'application/json'
//         };

//         // Make GET request to the API
//         const response = await axios.get(apiUrl, { headers });

//         // Return the data
//         return response.data;
//     } catch (error) {
//         // Handle errors
//         console.error('Error fetching product information:', error);
//         return null;
//     }
// }

// Example usage
// const productId = 'B0BK1KS6ZD'; // Replace with the desired product ID
// getProductInfo(productId)
//     .then(productInfo => {
//         if (productInfo) {
//             console.log('Product Information:', productInfo);
//         } else {
//             console.log('Failed to fetch product information.');
//         }
//     })
//     .catch(err => console.error('Error:', err));


//one more way to try
// async function getProductInfo(productId) {
//   try {
//       // API endpoint
//       const apiUrl = `https://amazon-product-info.p.rapidapi.com/product?id=${productId}`;

//       // Set up headers with API key
//       const headers = {
//           'x-rapidapi-host': 'amazon-product-info.p.rapidapi.com',
//           'x-rapid-key':'4308455532mshf236c29a3b2c97ep171863jsn1bf99e393059', // Replace with your RapidAPI key
//           'content-type': 'application/json',
//           'accept': 'application/json'
//       };

//       // Make GET request to the API
//       const response = await axios.get(apiUrl, { headers });

//       // Return the data
//       return response.data;
//   } catch (error) {
//       // Handle errors
//       console.error('Error fetching product information:', error);
//       return null;
//   }
// }

// // Function to update the HTML with product information
// async function updateProductDetails() {
//   const productId = 'B0BK1KS6ZD'; // Replace with the desired product ID
//   const productDetailsContainer = document.getElementById('product-details');

//   try {
//       // Fetch product information
//       const productInfo = await getProductInfo(productId);

//       if (productInfo) {
//           // Update HTML with product details
//           productDetailsContainer.innerHTML = `
//               <h2>${productInfo.title}</h2>
//               <p>Price: ${productInfo.price}</p>
//               <p>Description: ${productInfo.description}</p>
//               <!-- Add more product details here -->
//           `;
//       } else {
//           // Display error message if product information is not available
//           productDetailsContainer.innerHTML = '<p>Error fetching product information.</p>';
//       }
//   } catch (error) {
//       // Handle errors
//       console.error('Error:', error);
//       productDetailsContainer.innerHTML = '<p>Error fetching product information.</p>';
//   }
// }

// // Call the function to update product details when the page loads
// updateProductDetails();

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://amazon-pricing-and-product-info.p.rapidapi.com/',
//   params: {
//     asin: 'B07GR5MSKD',
//     domain: 'de'
//   },
//   headers: {
//     'X-RapidAPI-Key': '4308455532mshf236c29a3b2c97ep171863jsn1bf99e393059',
//     'X-RapidAPI-Host': 'amazon-pricing-and-product-info.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

let p = fetch("https://shopee.com.my/HDY-Kids-Magic-Electric-Water-Blowing-Bubbles-Soap-Machine-Toys-Kid-Automatic-Musical-Bubble-Children-Toy-Girl-Gifts-i.79530172.1916268308?ads_keyword=bubble%20machine&adsid=29224283&campaignid=13628578&position=0")
p.then((response)=>{
  return response.json()
}).then((response)=>{console.log(response)})



// to switch between the tabs
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname) {
            for (let tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (let tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab");
        }
  

for(i=0 ;i<tablinks.length;i++){
  tablinks[i].addEventListener('click',function(){
    document.querySelector('div','a.active-link').remove('active-link')
    this.classList.add('active-link')
  })
}

for(j=0;j<tabcontents.length;j++){
  document.querySelector('div.active-tab').remove('active-link')
  tabcontents[1].getElementById(tabcontents).classList.add('active-tab')
}