// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the order details from the URL parameters
const firstName = urlParams.get('first-name');
const email = urlParams.get('email');
const phoneNumber = urlParams.get('phone-number');
const fruit1 = urlParams.get('fruit1');
const fruit2 = urlParams.get('fruit2');
const fruit3 = urlParams.get('fruit3');
const specialInstructions = urlParams.get('special-instructions');

// Get the order date
const orderDate = new Date();

// Get the nutritional information for the fruits
// This should be replaced with a function to get the nutritional information from the web service
const nutritionInfo = getNutritionInfo(fruit1, fruit2, fruit3);

// Populate the order details
document.getElementById('order-details').innerHTML = `
  <p>First Name: ${firstName}</p>
  <p>Email: ${email}</p>
  <p>Phone Number: ${phoneNumber}</p>
  <p>Fruit 1: ${fruit1}</p>
  <p>Fruit 2: ${fruit2}</p>
  <p>Fruit 3: ${fruit3}</p>
  <p>Special Instructions: ${specialInstructions}</p>
  <p>Order Date: ${orderDate.toLocaleString()}</p>
  <p>Nutritional Information: ${JSON.stringify(nutritionInfo)}</p>
`;
