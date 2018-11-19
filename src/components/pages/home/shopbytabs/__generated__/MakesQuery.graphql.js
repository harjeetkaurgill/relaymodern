/**
 * @flow
 * @relayHash 4dadfcd04bd70fa99b34e71fd2518cab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MakesQueryVariables = {|
  year: string
|};
export type MakesQueryResponse = {|
  +store: {|
    +makes: $ReadOnlyArray<{|
      +key: string,
      +value: string,
    |}>
  |}
|};
export type MakesQuery = {|
  variables: MakesQueryVariables,
  response: MakesQueryResponse,
|};
*/


/*
query MakesQuery(
  $year: String!
) {
  store {
    makes(year: $year) {
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
        "name": "makes",
        "storageKey": null,
        "args": [
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
  "name": "MakesQuery",
  "id": null,
  "text": "query MakesQuery(\n  $year: String!\n) {\n  store {\n    makes(year: $year) {\n      key\n      value\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MakesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "MakesQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2b8245d4c8dca99e6c8fd3d21473713f';
module.exports = node;
