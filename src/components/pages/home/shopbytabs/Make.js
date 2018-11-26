import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import FitmentSelectInput from '../../../common/fitmentselectinput';

const MakeQuery = graphql`
  query MakeQuery($year: String!) {
    store {
      makes(year: $year) {
        key
        value
      }
    }
  }
`;

const Make = parentProps => (
  <QueryRenderer
    environment={parentProps.environment}
    query={MakeQuery}
    variables={{
      year: parentProps.year,
    }}
    render={({ error, props }) => {
      const makes = [];
      if (props) {
        return (
          <FitmentSelectInput
            label="Make"
            value="Select Make"
            optionsArray={props.store.makes}
            onChange={parentProps.onChange}
          />
        );
      }
      return (
        <FitmentSelectInput
          label="Make"
          value="Select Make"
          optionsArray={makes}
          onChange={parentProps.onChange}
        />
      );
    }}
  />
);

export default Make;
