import * as React from 'react';
import './css/Quote.css';

export interface Quotation {
  name: string,
	quote: string,
};

interface Props {
  className?: string,
  quotation: Quotation;
}

class Quote extends React.Component {
  public props: Props;

  public render() {
  	return (
	  	<div className={this.props.className}>
	      <h1 className="Quote-quote">
	        “{this.props.quotation.quote}”
	      </h1>
	      <h2 className="Quote-name">
	        -{this.props.quotation.name}
	      </h2>
	    </div>
	);
  }
}

export default Quote;