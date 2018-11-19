/**
 * @flow
 * @relayHash f477e278202ec0961604ed1fe95a52f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CategoryListInput = {
  name?: ?string,
  clientSubscriptionId?: ?string,
};
export type CategoryListSubscriptionVariables = {|
  input: CategoryListInput
|};
export type CategoryListSubscriptionResponse = {|
  +categoryList: ?{|
    +categories: ?{|
      +id: string,
      +categorieslist: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +_id: ?string,
            +name: ?string,
          |}
        |}>
      |},
    |}
  |}
|};
export type CategoryListSubscription = {|
  variables: CategoryListSubscriptionVariables,
  response: CategoryListSubscriptionResponse,
|};
*/


/*
subscription CategoryListSubscription(
  $input: CategoryListInput!
) {
  categoryList(input: $input) {
    categories {
      id
      categorieslist {
        edges {
          node {
            id
            _id
            name
          }
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
    "name": "input",
    "type": "CategoryListInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "categoryList",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CategoryListInput!"
      }
    ],
    "concreteType": "CategoryListPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categories",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryItemType",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "categorieslist",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryItemTypeConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "CategoryItemTypeEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Category",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "_id",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
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
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "CategoryListSubscription",
  "id": null,
  "text": "subscription CategoryListSubscription(\n  $input: CategoryListInput!\n) {\n  categoryList(input: $input) {\n    categories {\n      id\n      categorieslist {\n        edges {\n          node {\n            id\n            _id\n            name\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CategoryListSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "CategoryListSubscription",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3812ee0abbd6f1e3e1bfdb2d06ebb535';
module.exports = node;
