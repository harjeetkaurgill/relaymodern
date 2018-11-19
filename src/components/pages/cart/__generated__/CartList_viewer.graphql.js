/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CartList_viewer$ref: FragmentReference;
export type CartList_viewer = {|
  +getCart: ?{|
    +id: string,
    +_id: ?string,
    +cartId: ?string,
    +quantity: ?string,
    +total: ?string,
    +products: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +sku: ?string,
          +quantity: ?string,
          +title: ?string,
          +price: ?string,
          +image: ?string,
        |}
      |}>
    |},
  |},
  +$refType: CartList_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantity",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CartList_viewer",
  "type": "Queries",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "getCart",
      "storageKey": "getCart(sessionId:\"252555-85858-63636\")",
      "args": [
        {
          "kind": "Literal",
          "name": "sessionId",
          "value": "252555-85858-63636",
          "type": "String!"
        }
      ],
      "concreteType": "Cart",
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
          "name": "_id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cartId",
          "args": null,
          "storageKey": null
        },
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "total",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "products",
          "storageKey": null,
          "args": null,
          "concreteType": "CartProductConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "CartProductEdge",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "CartProduct",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "sku",
                      "args": null,
                      "storageKey": null
                    },
                    v0,
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
                      "name": "price",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "image",
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
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '647cba6d7661904959ef83041629caf3';
module.exports = node;
