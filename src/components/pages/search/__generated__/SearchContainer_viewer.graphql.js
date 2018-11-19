/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchContainer_viewer$ref: FragmentReference;
export type SearchContainer_viewer = {|
  +id: string,
  +searchProduct: ?{|
    +productslist: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +_id: ?string,
          +id: string,
          +sku: ?string,
          +name: ?string,
          +image: ?string,
          +price: ?string,
          +categoryId: ?string,
          +cartDescription: ?string,
          +shortDescription: ?string,
          +longDescription: ?string,
        |}
      |}>
    |}
  |},
  +$refType: SearchContainer_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "SearchContainer_viewer",
  "type": "Queries",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "searchString",
      "type": "String!",
      "defaultValue": ""
    }
  ],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "searchProduct",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "searchString",
          "variableName": "searchString",
          "type": "String!"
        }
      ],
      "concreteType": "SearchProductType",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "productslist",
          "storageKey": null,
          "args": null,
          "concreteType": "SearchItemsConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "SearchItemsEdge",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Product",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "_id",
                      "args": null,
                      "storageKey": null
                    },
                    v0,
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "sku",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "name",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "image",
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
                      "name": "categoryId",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "cartDescription",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "shortDescription",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "longDescription",
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
(node/*: any*/).hash = 'f126265536ff334bc3ea3076ef540927';
module.exports = node;
