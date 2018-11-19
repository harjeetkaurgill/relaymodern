import React from 'react';
import FitmentSelectInput from '../../../common/fitmentselectinput';
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay';

const Makes = graphql`
  query MakesQuery($year: String!) {
    store {
      makes(year: $year) {
        key
        value
      }
    }
  }
`;

export const FitElementMake = props => (
  <FitmentSelectInput
    label="Make"
    value="Select Make"
    optionsArray={props.optionsArray}
  />
);

const ShopByMake = parentprops => (
  <QueryRenderer
    environment={parentprops.environment}
    query={Makes}
    variables={{ year: '2018' }}
    render={({ error, props }) => {
      const emptyMakes = [];
      console.log(`here are the props ****** ${props}`);
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <FitElementMake optionsArray={props.value} />;
      }
      return <FitElementMake optionsArray={emptyMakes} />;
    }}
  />
);

const MakeContainer = props => (
  <ShopByMake environment={props.relay.environment} />
);

export default createFragmentContainer(MakeContainer, {
  store: graphql`
    fragment Makes_store on Store {
      idQuery
    }
  `,
});
