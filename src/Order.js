import React, { Component } from 'react';
import Product from './Product.js';
import './App.css';
import h from './helpers';

class Order extends Component {
  constructor() {
    super();
  }
  render() {
    const orderInfo = this.props.orderInfo;
    const productInfo = orderInfo.product;
    const orderId = orderInfo.id;
    return (
      <div id={orderInfo.id} className="orderDetailsContainer">
        <div className="orderImageContainer">
          <div className="orderImageInnerContainer">
            <img className="orderImage" width="70" height="70" src={productInfo.picture}/>
          </div>
          <div className="orderDetailsOuterContainer">
            <div className="orderDetailsInnerContainer">
              <div className="orderContainer"><a className="boldText" href="#" onClick={(e) => this.props.clickEvent(orderId)}>{productInfo.name}</a></div>
              <div className="orderContainer"><span className="semiboldText">Price:</span> {orderInfo.price}</div>
            </div>
            <div className="orderDetailsInnerContainer">
              <div className="orderContainer"><span className="semiboldText">Order Status :</span> {productInfo.orderStatus}</div>
              <div className="orderContainer"><span className="semiboldText">Ordered on :</span> {h.formatDate(productInfo.orderDate)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
