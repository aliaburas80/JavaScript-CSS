/*

Optional Chaining
Optional chaining syntax allows you to access deeply nested object properties without worrying if the property exists or not. If it exists, great! If not, undefined will be returned.

This not only works on object properties, but also on function calls and arrays. Super convenient! Here's an example:

*/

const product = {
  name: "product name",
  items: [
    {
      item: {
        id: 1,
        count: 0,
      },
    },
    {
      item: {
        id: 2,
        count: 1,
      },
    },
  ],
  type: "any type",
};

if (product && product.name) console.log("product.name", product.name); // "product name"
console.log("product?.name", product?.name); // "product name"
if (product && product.items) console.log("product.items", product.items); // [{…}, {…}]
console.log("product?.items", product?.items); // [{…}, {…}]
console.log("product?.items?.length", product?.items?.length);
if (product && product.error) console.log("product.error", product.error);
console.log("product?.error", product?.error);