# react-shopify-buy

A React component wrapper for Shopify’s Buy Button SDK.  
Easily embed Shopify products in your React app — without manually injecting <script> tags.

Written in TypeScript, reusable, and drop-in ready for any Shopify store.

---

## Acknowledgement
This repo is brand new and is actively evolving.

---

## Features
- TypeScript support
- React functional component
- Dynamically loads Shopify Buy SDK script
- Works with any Shopify product ID
- Prevents double renders (React StrictMode safe)
- Ready for multiple products / pages
- Future room for Themes, Cart Component, Multi Layouts, etc.

---

## Requirements
You must have the following:

- Shopify Storefront Domain (example: `mystore.myshopify.com`)
- Shopify Storefront Access Token (public storefront API token)

---

## Installation
```bash
npm install react-shopify-buy
```
or
```bash
yarn add react-shopify-buy
```

---

## Usage
```tsx
import ShopifyProduct from "react-shopify-buy";

export default function ProductsArea() {
  return (
    <ShopifyProduct
      productId="8445476569241"
      domain="mystore.myshopify.com"
      storefrontAccessToken="YOUR_STOREFRONT_TOKEN"
      buySDKUrl="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
      productCSS={{ marginBottom: "30px" }}
    />
  );
}
```

---

## Props
| prop                  | type                | description                                   | required |
| --------------------- | ------------------- | --------------------------------------------- | -------- |
| id                    | string              | DOM element id for component mount container  | Yes      |
| domain                | string              | Your Shopify Storefront domain                | Yes      |
| storefrontAccessToken | string              | Your Storefront Access Token                  | Yes      |
| buySDKUrl             | string              | Full URL pointing to Shopify Buy SDK script   | Yes      |
| productCSS            | React.CSSProperties | Inline wrapper styles                         | Optional |

The component dynamically creates a Shopify product UI instance into the container.

---

## Styling
You may decorate the container via inline styles (productCSS) or external CSS.

The Shopify Buy SDK also supports widget styling options (soon to be exposed as props in future versions).

---

## Example Usage With Multiple Products
```tsx
<div className="products">
  <ShopifyProduct id="8445476569241" domain="..." storefrontAccessToken="..." buySDKUrl="..." />
  <ShopifyProduct id="8445476569242" domain="..." storefrontAccessToken="..." buySDKUrl="..." />
  <ShopifyProduct id="8445476569243" domain="..." storefrontAccessToken="..." buySDKUrl="..." />
</div>
```

---

## Roadmap
- Add configurable color themes
- Expose Shopify Buy UI config mapping (buttons, fonts, layout)
- Add <ShopifyCart /> component (shared global cart)
- Add Global Provider (less prop repetition)

---

## License
MIT
> This package uses the official Shopify Buy Button SDK. Shopify® is a trademark of Shopify Inc. This project is not endorsed by or affiliated with Shopify Inc.
