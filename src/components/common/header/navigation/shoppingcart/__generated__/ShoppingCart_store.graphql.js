/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ShoppingCart_store$ref: FragmentReference;
export type ShoppingCart_store = {|
  +idQuery: ?number,
  +$refType: ShoppingCart_store$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ShoppingCart_store",
  "type": "Store",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "idQuery",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8a31e2a39a61fcbb9f2e1529e9a8f7a0';
module.exports = node;
