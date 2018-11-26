import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import FitmentSelectInput from '../../../common/fitmentselectinput';

const EngineQuery = graphql`
  query EngineQuery(
    $year: String!
    $make: String!
    $model: String!
    $submodel: String!
  ) {
    store {
      engine(year: $year, make: $make, model: $model, submodel: $submodel) {
        key
        value
      }
    }
  }
`;

const Engine = parentProps => {
  console.log('submode parentprops', parentProps);
  return (
    <QueryRenderer
      environment={parentProps.environment}
      query={EngineQuery}
      variables={{
        year: parentProps.year,
        make: parentProps.make,
        model: parentProps.model,
        submodel: parentProps.submodel,
      }}
      render={({ error, props }) => {
        const engine = [];
        if (props) {
          return (
            <FitmentSelectInput
              label="Engine"
              value="Select Engine"
              optionsArray={props.store.engine}
              onChange={parentProps.onChange}
            />
          );
        }
        return (
          <FitmentSelectInput
            label="Engine"
            value="Select Engine"
            optionsArray={engine}
            onChange={parentProps.onChange}
          />
        );
      }}
    />
  );
};

export default Engine;
