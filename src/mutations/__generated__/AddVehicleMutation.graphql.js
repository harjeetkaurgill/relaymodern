/**
 * @flow
 * @relayHash f6fb1169d1d34ccb899a2a8459b206dd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddVehicleOperationInput = {
  userId: string,
  year: string,
  make: string,
  model: string,
  submodel: string,
  engine: string,
  bodyType: string,
  bodyDoors: string,
  driveType: string,
  clientMutationId?: ?string,
};
export type AddVehicleMutationVariables = {|
  input: AddVehicleOperationInput
|};
export type AddVehicleMutationResponse = {|
  +addVehicleOperation: ?{|
    +userVehicle: ?{|
      +vehicle: $ReadOnlyArray<{|
        +year: string,
        +make: string,
        +model: string,
        +submodel: string,
        +engine: string,
      |}>
    |}
  |}
|};
export type AddVehicleMutation = {|
  variables: AddVehicleMutationVariables,
  response: AddVehicleMutationResponse,
|};
*/


/*
mutation AddVehicleMutation(
  $input: AddVehicleOperationInput!
) {
  addVehicleOperation(input: $input) {
    userVehicle {
      vehicle {
        year
        make
        model
        submodel
        engine
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddVehicleOperationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddVehicleOperationInput!"
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "vehicle",
  "storageKey": null,
  "args": null,
  "concreteType": "VehicleEntry",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "year",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "make",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "model",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "submodel",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "engine",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddVehicleMutation",
  "id": null,
  "text": "mutation AddVehicleMutation(\n  $input: AddVehicleOperationInput!\n) {\n  addVehicleOperation(input: $input) {\n    userVehicle {\n      vehicle {\n        year\n        make\n        model\n        submodel\n        engine\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddVehicleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addVehicleOperation",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddVehicleOperationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userVehicle",
            "storageKey": null,
            "args": null,
            "concreteType": "vehicleRecordType",
            "plural": false,
            "selections": [
              v2
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddVehicleMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addVehicleOperation",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddVehicleOperationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userVehicle",
            "storageKey": null,
            "args": null,
            "concreteType": "vehicleRecordType",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0d268d8e6cd04b25157e9e9ee1cf1d71';
module.exports = node;
