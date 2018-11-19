/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CategoryList_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryContainer_viewer$ref: FragmentReference;
export type CategoryContainer_viewer = {|
  +id: string,
  +$fragmentRefs: CategoryList_viewer$ref,
  +$refType: CategoryContainer_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CategoryContainer_viewer",
  "type": "Queries",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "CategoryList_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '103510315be674cf971b51e97e8a82ec';
module.exports = node;
