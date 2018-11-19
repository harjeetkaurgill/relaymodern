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
  mutation RemoveFromCartMutation($input: CartOperationInput!) {
    cartOperation(input: $input) {
      cart {
        id
        cart_id
        cart_total
        core_deposit_total
        totalNumberOfItems
        cart_entry {
          price
          sku_id
          brand
          quantity
          title
          imageUrl
          core_deposit
          product_url
          fitmentuid
          distributor_group
          category
          partType
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
        cart_id: props.cart_id,
        user_id: props.user_id,
        sku_id: props.sku_id,
        quantity: props.quantity,
        price: props.price,
        operation: props.operation,
        title: props.title,
        imageUrl: props.imageUrl,
        core_deposit: props.core_deposit,
        product_url: props.product_url,
        fitmentuid: props.fitmentuid,
        brand: props.brand,
        distributor_group: props.distributor_group,
        category: props.category,
        partType: props.partType,
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
