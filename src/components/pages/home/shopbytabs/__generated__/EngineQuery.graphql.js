/**
 * @flow
 * @relayHash 934a8cb447c96918ab8bfa77ff51f4df
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EngineQueryVariables = {|
  year: string,
  make: string,
  model: string,
  submodel: string,
|};
export type EngineQueryResponse = {|
  +store: {|
    +engine: $ReadOnlyArray<{|
      +key: string,
      +value: string,
    |}>
  |}
|};
export type EngineQuery = {|
  variables: EngineQueryVariables,
  response: EngineQueryResponse,
|};
*/


/*
query EngineQuery(
  $year: String!
  $make: String!
  $model: String!
  $submodel: String!
) {
  store {
    engine(year: $year, make: $make, model: $model, submodel: $submodel) {
      key
      value
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
        "name": "engine",
        "storageKey": null,
        "args": [
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EngineQuery",
  "id": null,
  "text": "query EngineQuery(\n  $year: String!\n  $make: String!\n  $model: String!\n  $submodel: String!\n) {\n  store {\n    engine(year: $year, make: $make, model: $model, submodel: $submodel) {\n      key\n      value\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EngineQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "EngineQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd52e7785ed40149d2a92b4ffbaab7857';
module.exports = node;
