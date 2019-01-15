import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className="white f3">
				{`${name}, 현재까지 검색한 사진은...` }
			</div>
			<div className="white f1">
				{entries}
			</div>
		</div>
	)
}

export default Rank;