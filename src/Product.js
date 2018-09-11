import React, { Component } from 'react';
import './App.css';
import h from './helpers';

class Product extends Component {
  constructor() {
    super();
    // this.state = {"profile":""};
  }
  render() {
    const productInfo = this.props.productInfo;
    return (
      <div>
        <div><h1 className="sectionHeader">Product Details</h1></div>
        <div id={productInfo.name} className="productContainer">
          <div className="productNameContainer">{productInfo.name}</div>
          <div className="productInnerContainer">
            <div className="productImageContainer">
              <img className="productImage" width="200" height="200" src={productInfo.picture}/>
            </div>
            <div className="productStatusContainer">
              <div><span className="semiboldText">Order Status :</span> {productInfo.orderStatus}</div>
              <div><span className="semiboldText">Ordered on :</span> {h.formatDate(productInfo.orderDate)}</div>
            </div>
          </div>
          <div className="profileSectionContainer">
           <div className="boldText">Description:</div>
           <div className="profileAboutContent">{productInfo.description}</div>
         </div>
          <div><a className="boldText" href="#" onClick={(e) => this.props.clickEvent()}>Back</a></div>
        </div>
      </div>
    );
  }
}

export default Product;
