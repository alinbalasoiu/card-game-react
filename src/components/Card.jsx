import React, {Component} from 'react'
import PropTypes from 'prop-types';
import CardFace from './CardFace';
import './card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render = () => {
        return (
            <div className='card' index={this.props.id}>
                <div className='cardClickInterceptor' value={this.props.name.slice(1)} suite={this.props.name[0]} selected={false} style={{width: '100px', height: '133px'}}> </div>
                <CardFace className='cardFace' name={this.props.name} width='100'/>
            </div>
        )
    }
}

Card.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};