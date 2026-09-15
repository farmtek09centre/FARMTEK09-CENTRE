/**
 * FARMTEK09 CENTRE — Product catalogue.
 * Single source of truth for names, prices and images, used by:
 *   - cart.js (storefront, runs in the browser)
 *   - server/products.js (checkout API — keep the two files in sync)
 *
 * >>> PRICES BELOW ARE PLACEHOLDERS. <<<
 * Edit `price` (KES) for every item to your real price before taking
 * real orders. Nothing else needs to change to update a price.
 *
 * `id` must never change once you've gone live — it's how a saved
 * cart matches an item, and it feeds into the eTIMS item code.
 * `taxTypeCd` is the KRA tax type for this item: A=Exempt, B=16%,
 * C=0%, D=Non-VAT, E=8%. Confirm the right one for seedlings/fruit
 * trees with KRA or your accountant — "D" (Non-VAT) is a placeholder
 * for a business that is not yet VAT-registered.
 */
const PRODUCTS = [
  { id: "grandnain",  name: "Grand Nain Banana",      price: 200, unit: "seedling", page: "details-grandnain.html",  taxTypeCd: "D" },
  { id: "williams",   name: "Williams Hybrid Banana",  price: 200, unit: "seedling", page: "details-williams.html",  taxTypeCd: "D" },
  { id: "fhia17",     name: "FHIA-17 Banana",          price: 250, unit: "seedling", page: "details-fhia17.html",    taxTypeCd: "D" },
  { id: "cavendish",  name: "Giant Cavendish Banana",  price: 200, unit: "seedling", page: "details-cavendish.html", taxTypeCd: "D" },
  { id: "lemon",      name: "Lemon Tree",              price: 350, unit: "seedling", page: "details-lemon.html",     taxTypeCd: "D" },
  { id: "tangerine",  name: "Tangerine Tree",          price: 350, unit: "seedling", page: "details-tangerine.html", taxTypeCd: "D" },
  { id: "apple",      name: "Apple Tree",              price: 400, unit: "seedling", page: "details-apple.html",    taxTypeCd: "D" },
  { id: "grape",      name: "Grape Vine",              price: 300, unit: "seedling", page: "details-grape.html",    taxTypeCd: "D" },
  { id: "mango",      name: "Mango Tree",              price: 300, unit: "seedling", page: "details-mango.html",    taxTypeCd: "D" },
  { id: "avocado",    name: "Avocado Tree",            price: 350, unit: "seedling", page: "details-avocado.html",  taxTypeCd: "D" }
];

// Works both as a browser <script> (defines window/global PRODUCTS)
// and as a Node "require" (module.exports) for the checkout server.
if (typeof module !== "undefined" && module.exports) {
  module.exports = PRODUCTS;
}
