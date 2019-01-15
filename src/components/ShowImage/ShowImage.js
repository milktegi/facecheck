import React from 'react';
import './ShowImage.css'

const ShowImage = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className="f4">
				{'this magin brain will detect faces in your picture, so give in a try!'}
			</p>
			<div className="center">
			<div className="form center pa4 br3 shadow-5">
				<input 
				onChange={onInputChange}
				className="f4 pa2 w-70 center"
				type="tex"
				/>
				<button
				onClick={onButtonSubmit}
				className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
				>Detect</button>
			</div>
			</div>
		</div>
	)
}

export default ShowImage;