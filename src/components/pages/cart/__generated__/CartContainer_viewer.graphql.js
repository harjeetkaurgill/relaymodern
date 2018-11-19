/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CartList_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CartContainer_viewer$ref: FragmentReference;
export type CartContainer_viewer = {|
  +$fragmentRefs: CartList_viewer$ref,
  +$refType: CartContainer_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CartContainer_viewer",
  "type": "Queries",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CartList_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a4165b6f84273af59133caf8ba2f8365';
module.exports = node;
