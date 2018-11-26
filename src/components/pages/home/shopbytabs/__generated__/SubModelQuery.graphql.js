/**
 * @flow
 * @relayHash e938cdcc7b75265c3fd33a871a9d64ab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubModelQueryVariables = {|
  year: string,
  make: string,
  model: string,
|};
export type SubModelQueryResponse = {|
  +store: {|
    +submodel: $ReadOnlyArray<{|
      +key: string,
      +value: string,
    |}>
  |}
|};
export type SubModelQuery = {|
  variables: SubModelQueryVariables,
  response: SubModelQueryResponse,
|};
*/


/*
query SubModelQuery(
  $year: String!
  $make: String!
  $model: String!
) {
  store {
    submodel(year: $year, make: $make, model: $model) {
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
        "name": "submodel",
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
  "name": "SubModelQuery",
  "id": null,
  "text": "query SubModelQuery(\n  $year: String!\n  $make: String!\n  $model: String!\n) {\n  store {\n    submodel(year: $year, make: $make, model: $model) {\n      key\n      value\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SubModelQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SubModelQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e74223914c1d36f95c206d35ed062c6';
module.exports = node;
