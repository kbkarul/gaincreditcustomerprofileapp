import React, { Component } from 'react';
import './App.css';
import h from './helpers';

class Profile extends Component {
  constructor() {
    super();
  }
  render() {
    const profileInfo = this.props.profileInfo;
    const displayName = profileInfo != "" ? profileInfo.name.first + " " + profileInfo.name.last : "";
    return (
      <div>
      <h1 className="sectionHeader">Profile Information</h1>
        <div className="profilePrimarySection">
          <div><img className="profileImage" width="40" height="40" src={profileInfo.picture}/></div>
          <div className="profilePrimaryInfo">
            <div className="boldText">{displayName}</div>
            <div><span className="semiboldText">Company :</span> {profileInfo.company}</div>
            <div><span className="semiboldText">Email :</span> {profileInfo.email}</div>
            <div><span className="semiboldText">Phone : </span>{profileInfo.phone}</div>
            <div><span className="semiboldText">Address : </span>{profileInfo.address}</div>
          </div>
        </div>
       <div className="profileSectionContainer">
        <div className="boldText">About:</div>
        <div className="profileAboutContent">{profileInfo.about}</div>
      </div>
      <div className="profileSectionContainer">
        <div className="boldText">Others:</div>
        <div className="profileAboutContent">
         <div><span className="semiboldText">Registered On : </span>{h.formatDateTime(profileInfo.registered)}</div>
         <div><span className="semiboldText">Latitude :</span> {profileInfo.latitude}</div>
         <div><span className="semiboldText">Longitude : </span>{profileInfo.longitude}</div>
       </div>
      </div>
      </div>
    );
  }
}

export default Profile;
