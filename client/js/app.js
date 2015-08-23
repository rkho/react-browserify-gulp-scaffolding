import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
      )
  }
}

React.render(<App />, document.getElementById('app'));

module.exports = App;
