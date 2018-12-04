import React from 'react';
import WidgetControls from './WidgetControls';
import './ListingWidget.scss';
import ProductsBox from '../../common/ProductsBox';
// import ProductsArray from '../../pages/home/Productdata.json';
import BannerWidget from '../../common/AdvertiseBannerWidget';

class ListingWidget extends React.Component {
  state = {
    listingView: false,
  };
  changeToListingView = () => {
    this.setState({ listingView: true });
  };
  changeToGridView = () => {
    this.setState({ listingView: false });
  };
  renderProducts(index) {
    // three products at a time
    const Products = [
      this.props.data.edges[index - 1],
      this.props.data.edges[index],
      this.props.data.edges[index + 1],
    ];

    return (
      <div>
        <div className="row productlistingrow" key={index}>
          {Products.map((product, i) => (
            <ProductsBox
              key={i}
              imgsrc={product.node.ImageURL}
              productTitle={product.node.Title}
              brandName={product.node.brand}
              partNumber={product.node.PartNumber}
              productDescription={product.node.Description}
              productPrice={product.node.price}
              availability={product.node.Availability}
              reviewsCount="0"
              gridClass={this.state.listingView ? '' : 'taps-sm-4 taps-xs'}
            />
          ))}
        </div>
        <BannerWidget
          className="banner-add mt40"
          imagesrc="/public/images/advertise/saveupto.png"
        />
      </div>
    );
  }
  render() {
    const { listingView } = this.state;
    return (
      <div className="widget">
        <div className="widget-control-box">
          <div className="w-title">
            Showing <strong> 1-20 </strong> of 503,955 results
          </div>
          <WidgetControls
            changeToListingView={this.changeToListingView}
            changeToGridView={this.changeToGridView}
            active={listingView}
          />
        </div>
        <div className="widget-body">
          <div
            className={
              listingView ? 'listing-container' : 'listing-container grid'
            }
          >
            {this.props.data.edges.map(
              (products, index) =>
                index % 3 ? this.renderProducts(index) : '',
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ListingWidget;
