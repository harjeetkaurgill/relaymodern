import React from 'react';
import './home.scss';
import Banner from './banner';
import ShopByTabs from './shopbytabs/ShopByTabs';
import FeaturedCategoriesWidget from './Widgets/FeaturedCategoriesWidget';
import RecentlyViewedWidget from './Widgets/RecentlyViewedWidget';
import DiagramWidget from './Widgets/DiagramWidget';
import OtherViewedWidget from './Widgets/OtherViewedWidget';
import Recommended from './Widgets/Recommended';

const Home = () => (
  <section className="wrapper">
    <Banner />
    <ShopByTabs />
    <div className="body-container">
      <div className="container">
        <FeaturedCategoriesWidget />
        <RecentlyViewedWidget />
        <Recommended />
        <DiagramWidget />
        <OtherViewedWidget />
      </div>
    </div>
  </section>
);

export default Home;
