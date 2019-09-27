import React, {Component} from 'react';
import './App.css';
const logo = process.env.PUBLIC_URL + '/rwclogo.png';
const profileImg = process.env.PUBLIC_URL + '/avatar-placeholder.png';
class App extends Component {
  render() {
    return (
        <div className={'App-header App'}>
          <div className={'row'}>
            <div className={'col'}>
              <img src={logo} alt="Logo" id={'logo'}/>
            </div>
            <div className={'col'}>
              <img src={profileImg} alt="profileImg"/>
            </div>

          </div>
        </div>
    );
  }
}

export default App;

