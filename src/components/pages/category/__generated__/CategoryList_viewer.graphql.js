/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryList_viewer$ref: FragmentReference;
export type CategoryList_viewer = {|
  +id: string,
  +categories: ?{|
    +id: string,
    +categorieslist: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +_id: ?string,
          +id: string,
          +name: ?string,
        |}
      |}>
    |},
  |},
  +$refType: CategoryList_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CategoryList_viewer",
  "type": "Queries",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "categories",
      "storageKey": null,
      "args": null,
      "concreteType": "CategoryItemType",
      "plural": false,
      "selections": [
        v0,
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
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "_id",
                      "args": null,
                      "storageKey": null
                    },
                    v0,
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '522e1b931c266187339f2863f56ba537';
module.exports = node;
