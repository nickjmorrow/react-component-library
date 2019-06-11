import * as React from 'react';

export const StyledComponentsIcon : React.FC<{style?: React.CSSProperties}> = ({style}) => {
	return (
		<div style={{fontSize: '30px', cursor: 'default', ...style}}>
			💅
		</div>
	)
}