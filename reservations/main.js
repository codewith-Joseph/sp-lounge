import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBjPzewsIDNL9RRLuGy1JQSwu9w_0CQUhY',
  authDomain: 'sao-5897a.firebaseapp.com',
  projectId: 'sao-5897a',
  storageBucket: 'sao-5897a.appspot.com',
  messagingSenderId: '788668145523',
  appId: '1:788668145523:web:63b5be2927aa3b2f6aef06',
  measurementId: 'G-CPG3ERF1DG',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

// Replace this with your Paystack public key
const paystackPublicKey = 'pk_test_e0473179f1b463f632fc046b992ee0ffbf2007c0';

// Function to handle order submission
const submitOrder = async (item, quantity, customerEmail) => {
  try {
    // Extract item name and price from the selected option
    const selectedItem = document.getElementById('item');
    const selectedOption = selectedItem.options[selectedItem.selectedIndex];
    const itemName = selectedOption.value;
    const itemPrice = selectedOption.dataset.price; // Retrieve price from data attribute

    // Save order details to Firestore
    const ordersCollection = collection(db, 'orders');

    await addDoc(ordersCollection, {
      item: itemName,
      quantity,
      price: itemPrice,
      total: quantity * parseInt(itemPrice),
      timestamp: new Date(),
    });

    // Initialize Paystack Inline with dynamically set customer email
    const handler = PaystackPop.setup({
      key: paystackPublicKey,
      email: customerEmail, // Use the dynamically provided customer email
      amount: quantity * parseInt(itemPrice) * 100,
      currency: 'NGN',
      ref: `order_${new Date().getTime()}`,
      callback: (response) => {
        // Handle payment success
        console.log(response);
        alert('Payment Successful!');
        // You can add additional logic here (e.g., redirect to a thank-you page)
      },
      onClose: () => {
        // Handle payment cancellation or failure
        alert('Payment Cancelled or Failed!');
      },
    });

    // Open Paystack Inline
    handler.openIframe();
  } catch (error) {
    console.error('Error submitting order:', error);
    alert('Error submitting order. Please try again.');
  }
};

// Event listener for form submission
document.getElementById('submit-order').addEventListener('click', () => {
  const selectedItem = document.getElementById('item').value;
  const selectedQuantity = document.getElementById('quantity').value;
  const customerEmail = document.getElementById('customer-email').value; // Dynamically capture customer email

  // Validate inputs (add more validation as needed)
  if (
    !selectedItem ||
    !selectedQuantity ||
    selectedQuantity < 1 ||
    !customerEmail
  ) {
    alert(
      'Please select an item, enter a valid quantity, and provide a valid email.'
    );
    return;
  }

  // Submit the order with dynamically captured customer email
  submitOrder(selectedItem, selectedQuantity, customerEmail);
});

document.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;

  // Adjust the value (e.g., 200) based on when you want the button to appear
  if (scrollPosition > 200) {
    document.querySelector('.uk-totop').classList.remove('uk-hidden');
    document.querySelector('.uk-totop').classList.add('uk-visible');
  } else {
    document.querySelector('.uk-totop').classList.add('uk-hidden');
    document.querySelector('.uk-totop').classList.remove('uk-visible');
  }
});
