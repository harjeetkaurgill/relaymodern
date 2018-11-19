import React from 'react';
import './tabs.scss';
import Tabs from '../../../common/Tabs';
import FitmentSelectInput from '../../../common/fitmentselectinput';
import FitmentSearchInput from '../../../common/FitmentSearchInput';
import { FitElementMake } from './Makes';

export default class ShopByTabs extends React.Component {
  state = {
    vinValue: '',
    partValue: '',
    selectedYear: '',
  };

  handleChange = () => {
    this.setState(() => ({
      selectedYear: '2018',
    }));
    console.log(`state is changed ${this.state.selectedYear}`);
  };

  render() {
    const year = ['2018', '2017', '2016', '2015', '2014'];
    const model = ['A3', 'A3 Quattro', 'A4', 'A4 Quattro', 'A5', 'A5 Quattro'];
    const submodel = [
      'Premium',
      'Premium Plus',
      'Prestige',
      'TDI Premium',
      'TDI Premium Plus',
    ];
    const engine = ['1.8L 4cyl', '2.0L 4cyl'];

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
                    optionsArray={year}
                    onChange={this.handleChange}
                  />
                  <FitElementMake />
                  <FitmentSelectInput
                    label="Model"
                    value="Select Model"
                    optionsArray={model}
                  />
                  <FitmentSelectInput
                    label="Submodel"
                    value="Select Submodel"
                    optionsArray={submodel}
                  />
                  <FitmentSelectInput
                    label="Engine"
                    value="Select Engine"
                    optionsArray={engine}
                  />
                  <div className="fitment-input">
                    <button className="button-fit-search">Shop now</button>
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
