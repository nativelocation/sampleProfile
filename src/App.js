import React, { Component } from 'react';
import logo from './assets/img/person.png';
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
                {heartState && <i className="far fa-heart" onClick={this.onHeartClick}></i>}
                {!heartState && <i className="fas fa-heart" onClick={this.onHeartClick} style={{ color: 'red' }}></i>}
              </div>
              <div className="profile-body">
                <img src={logo} className="profile-avatar" alt="logo" />
                <div className="profile-name">Carlos Arenas</div>
                <div className="profile-title">Web developer</div>
                <div className="profile-location">Columbia</div>
              </div>
              <div className="profile-footer">
                <div className="profile-views">
                  <div className="profile-views-number">1234</div>
                  <div className="profile-views-desc">Profile Views</div>
                </div>
                <div className="profile-webviews">
                  <div className="profile-webviews-number">5678</div>
                  <div className="profile-webviews-desc">Website Views</div>
                </div>
                <div className="profile-rateviews">
                  <div className="profile-rateviews-number">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star" style={{ opacity: 0.3 }}></i>
                  </div>
                  <div className="profile-rateviews-desc">Avg Rating</div>
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
