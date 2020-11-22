import React from 'react'
import PropTypes from 'prop-types';
import cards from '../assets/DeckCards.svg';

const CardFace = props => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
			className={`card-face`} width={props.width}
		>
			<use xlinkHref={`${cards}#${props.name}`} />
		</svg>
	)
}
CardFace.propTypes = {
	name: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
};

export default CardFace;