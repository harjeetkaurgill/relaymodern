/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Category_store$ref: FragmentReference;
export type Category_store = {|
  +categoryfilter: {|
    +categorylist: $ReadOnlyArray<{|
      +category: string,
      +subcategoryList: $ReadOnlyArray<{|
        +key: string,
        +value: string,
      |}>,
    |}>
  |},
  +$refType: Category_store$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Category_store",
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
    }
  ],
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
};
// prettier-ignore
(node/*: any*/).hash = '2872afd8179531d2580ec19886ce2e1d';
module.exports = node;
