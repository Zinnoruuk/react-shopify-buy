import './ShopifyProduct.css';

import { useEffect, useRef } from "react";

interface ShopifyProductProps {
    id: string,                             // store's div's id
    productId: string,                      // storefront's Id
    domain: string,                         // store's website link
    storefrontAccessToken: string,          // store access token
    buySDKUrl: string,                      // Shopify's SDK to work with the code
    productCSS?: React.CSSProperties        // CSS (optional)
}

const ShopifyProduct: React.FC<ShopifyProductProps> = ({ id, productId, domain, 
                                                    storefrontAccessToken, buySDKUrl, productCSS}) => {

  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    const scriptURL = buySDKUrl; // the string you add to buySDKUrl goes here

      const loadScript = () => {
        return new Promise<void>((resolve) => {
          let script:any = document.createElement("script");
          script.async = true;
          script.src = scriptURL;
          (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
          ).appendChild(script);
          script.onload = resolve;
        });
      }

    const ShopifyBuyInit = () => {
      let client = window.ShopifyBuy.buildClient({
        domain: domain,                                 // string of domain goes here
        storefrontAccessToken: storefrontAccessToken,   // string of store access token goes here
      });
      window.ShopifyBuy.UI.onReady(client).then(function (uiInstance:any) {

        let node = document.getElementById(id); // storefront id goes in the parameter
        if (node) node.innerHTML = "";

        uiInstance.createComponent("product", {
          id: productId,                                // storefront Id
          node: document.getElementById(id),   // div wrapper Id
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            // You also can include the options as you like from the embedded code, to be added later
          },
        });
      });
    }

    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) ShopifyBuyInit();
        else loadScript().then(ShopifyBuyInit);
    } else loadScript().then(ShopifyBuyInit);
  }, []);

  return (
      <div id={id} className="product-template-style" style={productCSS}></div>
  );
};

export default ShopifyProduct;
