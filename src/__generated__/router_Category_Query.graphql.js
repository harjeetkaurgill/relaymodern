/**
 * @flow
 * @relayHash b830bd6a6e5570a91279657c5dde1cbb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type router_Category_QueryVariables = {|
  year: string,
  make: string,
  model: string,
  submodel: string,
  engine: string,
|};
export type router_Category_QueryResponse = {|
  +store: {|
    +categoryfilter: {|
      +categorylist: $ReadOnlyArray<{|
        +category: string,
        +subcategoryList: $ReadOnlyArray<{|
          +key: string,
          +value: string,
        |}>,
      |}>
    |}
  |}
|};
export type router_Category_Query = {|
  variables: router_Category_QueryVariables,
  response: router_Category_QueryResponse,
|};
*/


/*
query router_Category_Query(
  $year: String!
  $make: String!
  $model: String!
  $submodel: String!
  $engine: String!
) {
  store {
    categoryfilter(year: $year, make: $make, model: $model, submodel: $submodel, engine: $engine) {
      categorylist {
        category
        subcategoryList {
          key
          value
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
  }
],
v1 = [
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
          {
            "kind": "Variable",
            "name": "engine",
            "variableName": "engine",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "make",
            "variableName": "make",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "model",
            "variableName": "model",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "submodel",
            "variableName": "submodel",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "year",
            "variableName": "year",
            "type": "String!"
          }
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_Category_Query",
  "id": null,
  "text": "query router_Category_Query(\n  $year: String!\n  $make: String!\n  $model: String!\n  $submodel: String!\n  $engine: String!\n) {\n  store {\n    categoryfilter(year: $year, make: $make, model: $model, submodel: $submodel, engine: $engine) {\n      categorylist {\n        category\n        subcategoryList {\n          key\n          value\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_Category_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "router_Category_Query",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '07445540c380231db9de850565c5c1c6';
module.exports = node;
