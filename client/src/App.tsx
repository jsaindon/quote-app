import {Quotation} from './Quote';

import * as React from 'react';
import './css/App.css';
import Quote from './Quote';
import Teacup from './Teacup';

interface State {
  quotation?: Quotation,
  error?: string,
};

class App extends React.Component {
  public state: State = {};

  public componentDidMount() {
    fetch('/api/quote', {mode: "cors"})
      .then(response => {
        if (response.ok) {
          return response.json()  
        }
        throw new Error('Server returned status: ' + response.status);
      })
      .then(quotation => {
        console.warn(quotation);
        if (quotation) {
          console.warn('setting quote:', quotation);
          this.setState({ quotation });
        }
      }).catch(error => {
        console.warn('error', error);
        this.setState({ error: error.message });
      });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Teacup />
          {
            this.state.quotation
              ? <Quote className="App-quote" quotation={this.state.quotation} />
              : <div className="App-error">{this.state.error}</div>
          }
        </header>
      </div>
    );
  }
}

export default App;
