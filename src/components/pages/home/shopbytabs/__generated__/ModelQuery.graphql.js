/**
 * @flow
 * @relayHash 6f6661f15dc42a5b72aa7793ad2b2aba
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ModelQueryVariables = {|
  year: string,
  make: string,
|};
export type ModelQueryResponse = {|
  +store: {|
    +model: $ReadOnlyArray<{|
      +key: string,
      +value: string,
    |}>
  |}
|};
export type ModelQuery = {|
  variables: ModelQueryVariables,
  response: ModelQueryResponse,
|};
*/


/*
query ModelQuery(
  $year: String!
  $make: String!
) {
  store {
    model(year: $year, make: $make) {
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
        "name": "model",
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
  "name": "ModelQuery",
  "id": null,
  "text": "query ModelQuery(\n  $year: String!\n  $make: String!\n) {\n  store {\n    model(year: $year, make: $make) {\n      key\n      value\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ModelQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ModelQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44e6f798cfe7514c3ae6993a35ae79be';
module.exports = node;
