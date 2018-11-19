/**
 * @flow
 * @relayHash 388b9ede9a991464ce346ab20978a9b7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShoppingCartQueryVariables = {|
  brand: string,
  partType: string,
  cart_id: string,
  user_id: string,
  sku_id: string,
  quantity: string,
  price: string,
  operation: string,
  title: string,
  imageUrl: string,
  core_deposit: string,
  product_url: string,
  fitmentuid: string,
  distributor_group: string,
  category: string,
|};
export type ShoppingCartQueryResponse = {|
  +store: {|
    +outerCart: {|
      +id: string,
      +cart: {|
        +id: string,
        +user_id: string,
        +cart_id: string,
        +cart_total: string,
        +core_deposit_total: string,
        +totalNumberOfItems: string,
        +cart_entry: $ReadOnlyArray<{|
          +title: string,
          +imageUrl: string,
          +price: number,
          +quantity: number,
          +sku_id: string,
          +core_deposit: number,
          +product_url: string,
          +fitmentuid: string,
          +distributor_group: string,
          +brand: string,
          +category: string,
          +partType: string,
        |}>,
      |},
    |}
  |}
|};
export type ShoppingCartQuery = {|
  variables: ShoppingCartQueryVariables,
  response: ShoppingCartQueryResponse,
|};
*/


/*
query ShoppingCartQuery(
  $brand: String!
  $partType: String!
  $cart_id: String!
  $user_id: String!
  $sku_id: String!
  $quantity: String!
  $price: String!
  $operation: String!
  $title: String!
  $imageUrl: String!
  $core_deposit: String!
  $product_url: String!
  $fitmentuid: String!
  $distributor_group: String!
  $category: String!
) {
  store {
    outerCart(brand: $brand, partType: $partType, cart_id: $cart_id, user_id: $user_id, sku_id: $sku_id, quantity: $quantity, price: $price, operation: $operation, title: $title, imageUrl: $imageUrl, core_deposit: $core_deposit, product_url: $product_url, fitmentuid: $fitmentuid, distributor_group: $distributor_group, category: $category) {
      id
      cart {
        id
        user_id
        cart_id
        cart_total
        core_deposit_total
        totalNumberOfItems
        cart_entry {
          title
          imageUrl
          price
          quantity
          sku_id
          core_deposit
          product_url
          fitmentuid
          distributor_group
          brand
          category
          partType
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "brand",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "partType",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cart_id",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "user_id",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sku_id",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "quantity",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "price",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "operation",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "imageUrl",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "core_deposit",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "product_url",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "fitmentuid",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "distributor_group",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "category",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "store",
    "storageKey": null,
    "args": null,
    "concreteType": "Store",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "outerCart",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "brand",
            "variableName": "brand",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "cart_id",
            "variableName": "cart_id",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "category",
            "variableName": "category",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "core_deposit",
            "variableName": "core_deposit",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "distributor_group",
            "variableName": "distributor_group",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "fitmentuid",
            "variableName": "fitmentuid",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "imageUrl",
            "variableName": "imageUrl",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "operation",
            "variableName": "operation",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "partType",
            "variableName": "partType",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "price",
            "variableName": "price",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "product_url",
            "variableName": "product_url",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "quantity",
            "variableName": "quantity",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "sku_id",
            "variableName": "sku_id",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "user_id",
            "variableName": "user_id",
            "type": "String!"
          }
        ],
        "concreteType": "OuterCartType",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cart",
            "storageKey": null,
            "args": null,
            "concreteType": "CartType",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "user_id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cart_id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cart_total",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "core_deposit_total",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "totalNumberOfItems",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cart_entry",
                "storageKey": null,
                "args": null,
                "concreteType": "CartEntry",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "imageUrl",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "price",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "quantity",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "sku_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "core_deposit",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "product_url",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fitmentuid",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "distributor_group",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "brand",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "category",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "partType",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ShoppingCartQuery",
  "id": null,
  "text": "query ShoppingCartQuery(\n  $brand: String!\n  $partType: String!\n  $cart_id: String!\n  $user_id: String!\n  $sku_id: String!\n  $quantity: String!\n  $price: String!\n  $operation: String!\n  $title: String!\n  $imageUrl: String!\n  $core_deposit: String!\n  $product_url: String!\n  $fitmentuid: String!\n  $distributor_group: String!\n  $category: String!\n) {\n  store {\n    outerCart(brand: $brand, partType: $partType, cart_id: $cart_id, user_id: $user_id, sku_id: $sku_id, quantity: $quantity, price: $price, operation: $operation, title: $title, imageUrl: $imageUrl, core_deposit: $core_deposit, product_url: $product_url, fitmentuid: $fitmentuid, distributor_group: $distributor_group, category: $category) {\n      id\n      cart {\n        id\n        user_id\n        cart_id\n        cart_total\n        core_deposit_total\n        totalNumberOfItems\n        cart_entry {\n          title\n          imageUrl\n          price\n          quantity\n          sku_id\n          core_deposit\n          product_url\n          fitmentuid\n          distributor_group\n          brand\n          category\n          partType\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ShoppingCartQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingCartQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ecfb14a9b03eed4bc58699dfd51cbed';
module.exports = node;
