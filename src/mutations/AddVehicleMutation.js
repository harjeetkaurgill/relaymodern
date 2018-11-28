/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation AddVehicleMutation($input: AddVehicleOperationInput!) {
    addVehicleOperation(input: $input) {
      userVehicle {
        vehicle {
          year
          make
          model
          submodel
          engine
        }
      }
    }
  }
`;

function commit(environment, props) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        userId: '3a0b42b5-bca7-4e34-9754-be909795aad4',
        year: props.year,
        make: props.make,
        model: props.model,
        submodel: props.submodel,
        engine: props.engine,
        bodyType: 'Sleek',
        bodyDoors: 'Wide',
        driveType: 'Manual',
      },
    },
    onCompleted: (response, errors) => {
      console.log('Response received from server.', response);
      console.log('Error received from server.', errors);
    },
    onError: err => console.error(err),
  });
}

export default {
  commit,
};
