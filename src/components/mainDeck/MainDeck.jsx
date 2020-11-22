import React, { Component } from 'react';
import '../mainDeck/mainDeck.css';
import DeckOfCards from '../deckOfCards/DeckOfCards';
import Card from '../card/Card';

export default class MainDeck extends Component {
    constructor(props){
        super(props);
        this.state = {
            removedCards: {c:[], s:[], h:[], d:[]},
        }
    }

    updateRemovedCards = rd => {
        this.setState({ removedCards: rd });
    }

    removedCardsSuiteRenderer = suite => {
        return this.state.removedCards[suite].map((card, key) => 
            <Card name={card} key={key} id={key} />
        )
    }

    render = () => {

        return (
            <div id='decks'>
                <div id='mainDeck'><DeckOfCards updater={this.updateRemovedCards}/></div>
                <div id='removedCards'>
                    <div id='spades' className={'deck'}> {this.removedCardsSuiteRenderer('s')} </div>
                    <div id='hearts' className={'deck'}> {this.removedCardsSuiteRenderer('h')} </div>
                    <div id='clubs' className={'deck'}> {this.removedCardsSuiteRenderer('c')} </div>
                    <div id='diamonds' className={'deck'}> {this.removedCardsSuiteRenderer('d')} </div>
                </div>
            </div>
        )
    }
}
MainDeck.propTypes = {
};