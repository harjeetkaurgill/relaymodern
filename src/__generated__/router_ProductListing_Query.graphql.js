/**
 * @flow
 * @relayHash ee0d328a2a9ab6a3ba0a0ae3172bf3d5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductListing_store$ref = any;
export type router_ProductListing_QueryVariables = {|
  year: string,
  make: string,
  model: string,
  submodel: string,
  engine: string,
  partType: string,
  category: string,
  subcategory: string,
|};
export type router_ProductListing_QueryResponse = {|
  +store: {|
    +$fragmentRefs: ProductListing_store$ref
  |}
|};
export type router_ProductListing_Query = {|
  variables: router_ProductListing_QueryVariables,
  response: router_ProductListing_QueryResponse,
|};
*/


/*
query router_ProductListing_Query(
  $year: String!
  $make: String!
  $model: String!
  $submodel: String!
  $engine: String!
  $partType: String!
  $category: String!
  $subcategory: String!
) {
  store {
    ...ProductListing_store
  }
}

fragment ProductListing_store on Store {
  categoryfilter(year: $year, make: $make, model: $model, submodel: $submodel, engine: $engine) {
    categorylist {
      category
      subcategoryList {
        key
        value
      }
    }
  }
  skuList(year: $year, make: $make, model: $model, submodel: $submodel, engine: $engine, partType: $partType, category: $category, subcategory: $subcategory) {
    skus {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          Title
          PartNumber
          brand
          Category
          Subcategory
          ImageURL
          price
          Availability
          Description
          id
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "year",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "make",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "model",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "submodel",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "engine",
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
    "name": "category",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "subcategory",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "engine",
  "variableName": "engine",
  "type": "String!"
},
v2 = {
  "kind": "Variable",
  "name": "make",
  "variableName": "make",
  "type": "String!"
},
v3 = {
  "kind": "Variable",
  "name": "model",
  "variableName": "model",
  "type": "String!"
},
v4 = {
  "kind": "Variable",
  "name": "submodel",
  "variableName": "submodel",
  "type": "String!"
},
v5 = {
  "kind": "Variable",
  "name": "year",
  "variableName": "year",
  "type": "String!"
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_ProductListing_Query",
  "id": null,
  "text": "query router_ProductListing_Query(\n  $year: String!\n  $make: String!\n  $model: String!\n  $submodel: String!\n  $engine: String!\n  $partType: String!\n  $category: String!\n  $subcategory: String!\n) {\n  store {\n    ...ProductListing_store\n  }\n}\n\nfragment ProductListing_store on Store {\n  categoryfilter(year: $year, make: $make, model: $model, submodel: $submodel, engine: $engine) {\n    categorylist {\n      category\n      subcategoryList {\n        key\n        value\n      }\n    }\n  }\n  skuList(year: $year, make: $make, model: $model, submodel: $submodel, engine: $engine, partType: $partType, category: $category, subcategory: $subcategory) {\n    skus {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      edges {\n        node {\n          Title\n          PartNumber\n          brand\n          Category\n          Subcategory\n          ImageURL\n          price\n          Availability\n          Description\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_ProductListing_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
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
            "kind": "FragmentSpread",
            "name": "ProductListing_store",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_ProductListing_Query",
    "argumentDefinitions": v0,
    "selections": [
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
            "name": "categoryfilter",
            "storageKey": null,
            "args": [
              v1,
              v2,
              v3,
              v4,
              v5
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
              v1,
              v2,
              v3,
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
              v4,
              v5
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
                          },
                          v6
                        ]
                      }
                    ]
                  }
                ]
              },
              v6
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '222c34d31fd9825fe094089c32708af2';
module.exports = node;
