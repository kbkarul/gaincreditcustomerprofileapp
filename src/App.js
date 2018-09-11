import React, { Component } from 'react';
import './App.css';
import profileJson from './profiledata.js';
import Order from './Order.js';
import Product from './Product.js';
import Profile from './Profile.js';

class App extends Component {
  constructor() {
    super();
    this.state = {profile:"", orders: [], showProductDetails: false, product:{}, showHomePage: true};
    this.showProductInfo = this.showProductInfo.bind(this);
    this.showProfileInfo = this.showProfileInfo.bind(this);
    this.showMyOrders = this.showMyOrders.bind(this);
    this.showMyHome = this.showMyHome.bind(this);
  }
  showProductInfo(orderId) {
    this.setState({showProductDetails: true, showHomePage: false, product: this.state.orders.filter(o => o.id == orderId)});
  }
  showProfileInfo() {
    this.setState({showProductDetails: false, showHomePage: false});
  }
  showMyOrders() {
    this.setState({showProductDetails: false, showHomePage: false});
  }
  showMyHome() {
    this.setState({showProductDetails: false, showHomePage: true});
  }
  render() {
    const profileInfo = this.state.profile;
    let displayContent = "";
    if(this.state.showHomePage) {
      displayContent = <Profile profileInfo={profileInfo}/>
    }
    else if(this.state.showProductDetails) {
      let product = this.state.product[0].product;
      displayContent = <Product clickEvent={this.showProfileInfo} productInfo={product}/>
    } else {
      displayContent = <div>
        <div><h1 className="sectionHeader">Order Details</h1></div>
        <div>
        {this.state.orders.map(order => <Order clickEvent={this.showProductInfo} orderInfo={order}/>)}
        </div>
      </div>
    }
    return (
      <div className="App">
      <div className="appHeader">
        <div className="appLogo"><img src="/logo.png" /></div>
        <div className="menu"><a href="#" className="menuLink" onClick={this.showMyHome}>My Home</a></div>
        <div className="menu"><a href="#" className="menuLink" onClick={this.showMyOrders}>My Orders</a></div>
      </div>
      <div className="appContentContainer">
      {displayContent}
      </div>
      </div>
    );
  }

  async componentDidMount() {
    // const profileResponse = await fetch('https://gm50ml1rtc.execute-api.ap-southeast-1.amazonaws.com/default/testOrder');
    // let profileResponseJson = await profileResponse.json();
    /**
    * Loaded from local js file due CORS issue
    */
    this.setState({profile : profileJson, orders: profileJson.orders});
  }


}

export default App;
