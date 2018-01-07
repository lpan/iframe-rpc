import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  requestData() {
    // RPC call
  }

  render() {
    return (
      <div>
        <iframe src="http://lpan.io" ref={(c) => { this.child = c }} />
        <div>
          <button onClick={this.requestData.bind(this)}>Request data</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
