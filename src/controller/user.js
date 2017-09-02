const Base = require('./base.js');
module.exports = class extends think.Controller {
  //login action
  async loginAction(){
    import React from 'react';
    import ReactDOM from 'react-dom';
    import GitHubLogin from 'react-github-login';
     
    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);
     
    ReactDOM.render(
      <GitHubLogin clientId="b7a21a56f032455afa67"
    redirectUri="/login/index"
    buttonText="login"
        onSuccess={onSuccess}
        onFailure={onFailure}/>,
      document.getElementById('example')
    );
  }
}