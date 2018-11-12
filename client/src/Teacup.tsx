import * as React from 'react';
import './css/Teacup.css';
import teacup from './images/teacup.png';

class Teacup extends React.Component {
	public render() {
		return (
			<div className="Teacup">
				<span className="Teacup-steam" />
				<img className="Teacup-teacup" src={teacup} />
			</div>
		);
	}
}

export default Teacup;