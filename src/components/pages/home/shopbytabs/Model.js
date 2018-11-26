import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import FitmentSelectInput from '../../../common/fitmentselectinput';

const ModelQuery = graphql`
  query ModelQuery($year: String!, $make: String!) {
    store {
      model(year: $year, make: $make) {
        key
        value
      }
    }
  }
`;

const Model = parentProps => (
  <QueryRenderer
    environment={parentProps.environment}
    query={ModelQuery}
    variables={{
      year: parentProps.year,
      make: parentProps.make,
    }}
    render={({ error, props }) => {
      const intialModel = [];
      if (props) {
        return (
          <FitmentSelectInput
            label="Model"
            value="Select Model"
            optionsArray={props.store.model}
            onChange={parentProps.onChange}
          />
        );
      }
      return (
        <FitmentSelectInput
          label="Model"
          value="Select Model"
          optionsArray={intialModel}
          onChange={parentProps.onChange}
        />
      );
    }}
  />
);

export default Model;
