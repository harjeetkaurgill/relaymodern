/**
 * @flow
 * @relayHash 5a345dd396f1448ea6c98841fea4cf0a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CartOperationInput = {
  cart_id: string,
  user_id: string,
  sku_id: string,
  quantity: string,
  price: string,
  operation: string,
  title: string,
  core_deposit: string,
  imageUrl: string,
  product_url: string,
  distributor_group: string,
  fitmentuid: string,
  brand: string,
  category: string,
  partType: string,
  clientMutationId?: ?string,
};
export type RemoveFromCartMutationVariables = {|
  input: CartOperationInput
|};
export type RemoveFromCartMutationResponse = {|
  +cartOperation: ?{|
    +cart: ?{|
      +id: string,
      +cart_id: string,
      +cart_total: string,
      +core_deposit_total: string,
      +totalNumberOfItems: string,
      +cart_entry: $ReadOnlyArray<{|
        +price: number,
        +sku_id: string,
        +brand: string,
        +quantity: number,
        +title: string,
        +imageUrl: string,
        +core_deposit: number,
        +product_url: string,
        +fitmentuid: string,
        +distributor_group: string,
        +category: string,
        +partType: string,
      |}>,
    |}
  |}
|};
export type RemoveFromCartMutation = {|
  variables: RemoveFromCartMutationVariables,
  response: RemoveFromCartMutationResponse,
|};
*/


/*
mutation RemoveFromCartMutation(
  $input: CartOperationInput!
) {
  cartOperation(input: $input) {
    cart {
      id
      cart_id
      cart_total
      core_deposit_total
      totalNumberOfItems
      cart_entry {
        price
        sku_id
        brand
        quantity
        title
        imageUrl
        core_deposit
        product_url
        fitmentuid
        distributor_group
        category
        partType
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CartOperationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "cartOperation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CartOperationInput!"
      }
    ],
    "concreteType": "CartOperationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cart",
        "storageKey": null,
        "args": null,
        "concreteType": "CartType",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
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
                "name": "price",
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
                "name": "brand",
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RemoveFromCartMutation",
  "id": null,
  "text": "mutation RemoveFromCartMutation(\n  $input: CartOperationInput!\n) {\n  cartOperation(input: $input) {\n    cart {\n      id\n      cart_id\n      cart_total\n      core_deposit_total\n      totalNumberOfItems\n      cart_entry {\n        price\n        sku_id\n        brand\n        quantity\n        title\n        imageUrl\n        core_deposit\n        product_url\n        fitmentuid\n        distributor_group\n        category\n        partType\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveFromCartMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveFromCartMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a36fcd6c17f6df27d290342faa437412';
module.exports = node;
