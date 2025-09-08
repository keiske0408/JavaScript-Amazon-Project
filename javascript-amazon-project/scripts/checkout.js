import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
import "../data/car.js";
import "../data/backend-practice.js";
//import '../data/cart-class.js';

async function loadPage(){
  try {
    //throw 'error1'
    
    await loadProductFetch();

    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        
        resolve('value3');
      });
    });

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }
  
  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();
/*
Promise.all([
  loadProductFetch(),

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(()=>{
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});

*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  });
})
  .then((value) => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
*/


/*
loadProducts(() => {
  loadCart(()=>{
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  })
});
*/
