import React from "react";
import Quotes from "./components/Quotes";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: []
    };
  }
  getSimpson = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson: data[0]
        });
      });
  };
  render() {
    return (
      <div className="App">
        <Quotes simpson={this.state.simpson} />
        <button type="button" onClick={this.getSimpson}>
          Get Quote
        </button>
      </div>
    );
  }
}
export default App;
