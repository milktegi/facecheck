import React from 'react';
import './ShowImage.css'

const ShowImage = () => {
	return (
		<div>
			<p className="f4">
				{'이미지 url을 입력하면 얼굴 인식을 시작합니다.'}
			</p>
			<div className="center">
			<div className="form center pa4 br3 shadow-5">
				<input 
				className="f4 pa2 w-70 center"
				type="tex"
				/>
				<button
				className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
				>Detect</button>
			</div>
			</div>
		</div>
	)
}

export default ShowImage;