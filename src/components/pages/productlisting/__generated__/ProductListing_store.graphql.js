/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductListing_store$ref: FragmentReference;
export type ProductListing_store = {|
  +categoryfilter: {|
    +categorylist: $ReadOnlyArray<{|
      +category: string,
      +subcategoryList: $ReadOnlyArray<{|
        +key: string,
        +value: string,
      |}>,
    |}>
  |},
  +skuList: ?{|
    +skus: ?{|
      +pageInfo: {|
        +hasNextPage: boolean,
        +hasPreviousPage: boolean,
        +startCursor: ?string,
        +endCursor: ?string,
      |},
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +Title: string,
          +PartNumber: string,
          +brand: string,
          +Category: string,
          +Subcategory: string,
          +ImageURL: string,
          +price: string,
          +Availability: string,
          +Description: string,
        |}
      |}>,
    |}
  |},
  +$refType: ProductListing_store$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "Variable",
  "name": "engine",
  "variableName": "engine",
  "type": "String!"
},
v1 = {
  "kind": "Variable",
  "name": "make",
  "variableName": "make",
  "type": "String!"
},
v2 = {
  "kind": "Variable",
  "name": "model",
  "variableName": "model",
  "type": "String!"
},
v3 = {
  "kind": "Variable",
  "name": "submodel",
  "variableName": "submodel",
  "type": "String!"
},
v4 = {
  "kind": "Variable",
  "name": "year",
  "variableName": "year",
  "type": "String!"
};
return {
  "kind": "Fragment",
  "name": "ProductListing_store",
  "type": "Store",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "year",
      "type": "String!"
    },
    {
      "kind": "RootArgument",
      "name": "make",
      "type": "String!"
    },
    {
      "kind": "RootArgument",
      "name": "model",
      "type": "String!"
    },
    {
      "kind": "RootArgument",
      "name": "submodel",
      "type": "String!"
    },
    {
      "kind": "RootArgument",
      "name": "engine",
      "type": "String!"
    },
    {
      "kind": "RootArgument",
      "name": "partType",
      "type": "String!"
    },
    {
      "kind": "RootArgument",
      "name": "category",
      "type": "String!"
    },
    {
      "kind": "RootArgument",
      "name": "subcategory",
      "type": "String!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "categoryfilter",
      "storageKey": null,
      "args": [
        v0,
        v1,
        v2,
        v3,
        v4
      ],
      "concreteType": "categoryMap",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "categorylist",
          "storageKey": null,
          "args": null,
          "concreteType": "category",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "category",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "subcategoryList",
              "storageKey": null,
              "args": null,
              "concreteType": "item",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "key",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "value",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "skuList",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "category",
          "variableName": "category",
          "type": "String!"
        },
        v0,
        v1,
        v2,
        {
          "kind": "Variable",
          "name": "partType",
          "variableName": "partType",
          "type": "String!"
        },
        {
          "kind": "Variable",
          "name": "subcategory",
          "variableName": "subcategory",
          "type": "String!"
        },
        v3,
        v4
      ],
      "concreteType": "SkuInfoNode",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "skus",
          "storageKey": null,
          "args": null,
          "concreteType": "SkuConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "pageInfo",
              "storageKey": null,
              "args": null,
              "concreteType": "PageInfo",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "hasNextPage",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "hasPreviousPage",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "startCursor",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "endCursor",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "SkuEdge",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Sku",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "Title",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "PartNumber",
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
                      "name": "Category",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "Subcategory",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "ImageURL",
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
                      "name": "Availability",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "Description",
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
(node/*: any*/).hash = '9c78a0a058c5513d2e70be9b9d1df8d4';
module.exports = node;
