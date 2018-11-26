import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import FitmentSelectInput from '../../../common/fitmentselectinput';

const SubModelQuery = graphql`
  query SubModelQuery($year: String!, $make: String!, $model: String!) {
    store {
      submodel(year: $year, make: $make, model: $model) {
        key
        value
      }
    }
  }
`;

const SubModel = parentProps => {
  console.log('submode parentprops', parentProps);
  return (
    <QueryRenderer
      environment={parentProps.environment}
      query={SubModelQuery}
      variables={{
        year: parentProps.year,
        make: parentProps.make,
        model: parentProps.model,
      }}
      render={({ error, props }) => {
        const submodel = [];
        if (props) {
          return (
            <FitmentSelectInput
              label="Submodel"
              value="Select Submodel"
              optionsArray={props.store.submodel}
              onChange={parentProps.onChange}
            />
          );
        }
        return (
          <FitmentSelectInput
            label="Submodel"
            value="Select Submodel"
            optionsArray={submodel}
            onChange={parentProps.onChange}
          />
        );
      }}
    />
  );
};

export default SubModel;
