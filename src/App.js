import React, { Component } from 'react';
import logo from './assets/img/person.png';
import heart from './assets/img/heart.png';
import heartfill from './assets/img/heartfill.png';
import star from './assets/img/star.png';
import starfill from './assets/img/starfill.png';
import './App.css';

class App extends Component {
  state = {
    heartState: true,
  }

  onHeartClick = () => {
    this.setState({ heartState: !this.state.heartState });
  }

  render() {
    const { heartState } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <div className="outer">
            <div className="profile-container">
              <div className="profile-header">
                Developer Profile
                {/* {heartState && <i className="far fa-heart" onClick={this.onHeartClick}></i>}
                {!heartState && <i className="fas fa-heart" onClick={this.onHeartClick} style={{ color: 'red' }}></i>} */}
                {heartState && <img src={heart} onClick={this.onHeartClick} alt="heart" />}
                {!heartState && <img src={heartfill} onClick={this.onHeartClick} alt="heartfill" />}
              </div>
              <div className="profile-body">
                <img src={logo} className="profile-avatar" alt="logo" />
                <div className="profile-name">Carlos Arenas</div>
                <div className="profile-title">Web developer</div>
                <div className="profile-location">Columbia</div>
              </div>
              <div className="profile-footer">
                <div className="profile-views">
                  <div className="profile-views-number">1,234</div>
                  <div className="profile-views-desc">Profile Views</div>
                </div>
                <div className="profile-webviews">
                  <div className="profile-webviews-number">5,678</div>
                  <div className="profile-webviews-desc">Website Views</div>
                </div>
                <div className="profile-rateviews">
                  <div className="profile-rateviews-number">
                    <img src={starfill} alt="starfill" />
                    <img src={starfill} alt="starfill" />
                    <img src={starfill} alt="starfill" />
                    <img src={starfill} alt="starfill" />
                    <img src={star} alt="star" />
                  </div>
                  <div className="profile-rateviews-desc">Avg. Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
