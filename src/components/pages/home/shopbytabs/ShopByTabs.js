import React from 'react';
import { Redirect } from 'react-router-dom';
import { createFragmentContainer, graphql } from 'react-relay';
import './tabs.scss';
import Tabs from '../../../common/Tabs';
import Make from './Make';
import Model from './Model';
import SubModel from './SubModel';
import Engine from './Engine';

import FitmentSelectInput from '../../../common/fitmentselectinput';
import FitmentSearchInput from '../../../common/FitmentSearchInput';
import { getYears } from '../../../../helpers';

class ShopByTabs extends React.Component {
  state = {
    vinValue: '',
    partValue: '',
    year: '2010',
    make: 'Acura',
    model: 'A3',
    submodel: 'Premium',
    engine: '',
  };

  handleYearChange = year => {
    this.setState({ year });
  };

  handleMakeChange = make => {
    this.setState({ make });
  };
  handleModelChange = model => {
    this.setState({ model });
  };
  handleSubModelChange = submodel => {
    this.setState({ submodel });
  };
  handleEngineChange = engine => {
    this.setState({ engine });
  };

  handleShoNow = () => {
    console.log('ready to get category', this.state);
    const { year, make, model, submodel, engine } = this.state;
    const path = `${year}/${make}/${model}/${submodel}/${engine}`;
    console.log('path is: ', path);
    return <Redirect to={`/category/${path}`} push />;
  };

  render() {
    const { year, make, model, submodel, engine } = this.state;
    return (
      <section className="tabs">
        <div className="container">
          <div className="tabs-wrapper">
            <Tabs className="tabs-main">
              <div label="Shop By Vehicle" classvalue="tabs-button">
                <div className="form-wrapper">
                  <FitmentSelectInput
                    label="Year"
                    value="Select Year"
                    optionsArray={getYears()}
                    onChange={this.handleYearChange}
                  />
                  <Make
                    environment={this.props.relay.environment}
                    onChange={this.handleMakeChange}
                    year={year}
                  />

                  <Model
                    environment={this.props.relay.environment}
                    onChange={this.handleModelChange}
                    year={year}
                    make={make}
                  />

                  <SubModel
                    environment={this.props.relay.environment}
                    onChange={this.handleSubModelChange}
                    year={year}
                    make={make}
                    model={model}
                  />

                  <Engine
                    environment={this.props.relay.environment}
                    onChange={this.handleEngineChange}
                    year={year}
                    make={make}
                    model={model}
                    submodel={submodel}
                  />

                  <div className="fitment-input">
                    <button
                      onClick={this.handleShoNow}
                      className="button-fit-search"
                    >
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
              <div label="Shop By VIN" classvalue="tabs-button">
                <div className="form-wrapper">
                  <form>
                    <FitmentSearchInput
                      value={this.state.vinValue}
                      placeholder="Search By VIN Number"
                      buttonlabel="Search"
                    />
                  </form>
                </div>
              </div>
              <div label="Shop By Part" classvalue="tabs-button">
                <div className="form-wrapper">
                  <form>
                    <FitmentSearchInput
                      value={this.state.partValue}
                      placeholder="Search By Keyword and Part Number"
                      buttonlabel="Search"
                    />
                  </form>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

export default createFragmentContainer(ShopByTabs, {
  store: graphql`
    fragment ShopByTabs_store on Store {
      idQuery
    }
  `,
});
