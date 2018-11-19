/**
 * @flow
 * @relayHash c042152b88eb82770436696a7d577dc4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SearchContainer_viewer$ref = any;
export type SearchContainerRefetchQueryVariables = {|
  searchString: string
|};
export type SearchContainerRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SearchContainer_viewer$ref
  |}
|};
export type SearchContainerRefetchQuery = {|
  variables: SearchContainerRefetchQueryVariables,
  response: SearchContainerRefetchQueryResponse,
|};
*/


/*
query SearchContainerRefetchQuery(
  $searchString: String!
) {
  viewer {
    ...SearchContainer_viewer_4ES8AM
    id
  }
}

fragment SearchContainer_viewer_4ES8AM on Queries {
  id
  searchProduct(searchString: $searchString) {
    productslist {
      edges {
        node {
          _id
          id
          sku
          name
          image
          price
          categoryId
          cartDescription
          shortDescription
          longDescription
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
    "name": "searchString",
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SearchContainerRefetchQuery",
  "id": null,
  "text": "query SearchContainerRefetchQuery(\n  $searchString: String!\n) {\n  viewer {\n    ...SearchContainer_viewer_4ES8AM\n    id\n  }\n}\n\nfragment SearchContainer_viewer_4ES8AM on Queries {\n  id\n  searchProduct(searchString: $searchString) {\n    productslist {\n      edges {\n        node {\n          _id\n          id\n          sku\n          name\n          image\n          price\n          categoryId\n          cartDescription\n          shortDescription\n          longDescription\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SearchContainerRefetchQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Queries",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SearchContainer_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "searchString",
                "variableName": "searchString",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchContainerRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Queries",
        "plural": false,
        "selections": [
          v1,
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
                          v1,
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
              },
              v1
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4096a7a878db17c986fb2c1d9a3cad44';
module.exports = node;
