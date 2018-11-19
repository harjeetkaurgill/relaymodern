/**
 * @flow
 * @relayHash afb2eba875900eb40ae9cd3e98d3ffb9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_store$ref = any;
export type router_App_QueryVariables = {||};
export type router_App_QueryResponse = {|
  +store: {|
    +$fragmentRefs: App_store$ref
  |}
|};
export type router_App_Query = {|
  variables: router_App_QueryVariables,
  response: router_App_QueryResponse,
|};
*/


/*
query router_App_Query {
  store {
    ...App_store
  }
}

fragment App_store on Store {
  idQuery
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "router_App_Query",
  "id": null,
  "text": "query router_App_Query {\n  store {\n    ...App_store\n  }\n}\n\nfragment App_store on Store {\n  idQuery\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "router_App_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "name": "App_store",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "router_App_Query",
    "argumentDefinitions": [],
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
            "kind": "ScalarField",
            "alias": null,
            "name": "idQuery",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '7a6db36864f7d0fd6ad67fea4fe65d39';
module.exports = node;
