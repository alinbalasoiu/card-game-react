import React, { Component } from 'react';
import './deckOfCards.css';
import Card from './Card';
import PropTypes from 'prop-types';

const valueToLabelMapping = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  }

  const suitToSymbolMapping = {
    club: 'c', spade: 's', heart: 'h', diamond: 'd',
  }

export default class DeckOfCards extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [],
            removedCards: {c:[], s:[], h:[], d:[]},
            isRemoveAllDisabled: true,
        }

        
    }

    componentDidMount = () => {
        this.createCardsSet();
    }

    createCardsSet = () => {
        const cards = [].concat(
            ...Object.keys(suitToSymbolMapping).map((suite) => this.createCardBySuite(suitToSymbolMapping[suite])),
          );
        this.setState({cards: cards}, () => {
            this.setState({ cards: this.shuffleCards( this.state.cards )} )
        })
    }

    createCardBySuite = suite => Object.keys(valueToLabelMapping)
        .map((label) => {
            const card = suite + valueToLabelMapping[label];
            return card;
        }
    )

    shuffleCards = cards => {
        cards = [...cards];
        const aLength = cards.length;
        for (let i = aLength - 1; i > 0; i -= 1) {
          const j = Math.ceil(Math.random() * i);
          [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
      };

    cardClicked = evt => {
        let classList = evt.target.classList.value;
        if( evt.shiftKey ){
            if( this.state.isRemoveAllDisabled === true ){
                this.setState({ isRemoveAllDisabled: false });
            }
            if( classList.indexOf(' selected') > -1 ) {evt.target.classList.remove('selected')}
            else evt.target.classList.add('selected');
        } else if( evt.target.classList.value.indexOf(' selected') > -1 ){
            evt.target.classList.remove('selected');
            if( this.getAListOfAllSelected().length === 0 ) {
                this.setState({ isRemoveAllDisabled: true });
            }
        } else {
            // remove of previously selected, if any
            this.removeAllSelectionIndicator();
            this.removeCards( [evt.target] );
        }
        
    }

    removeCards = listOfCards => {
        const cardsCopy = [...this.state.cards];
        let removedCards = {...this.state.removedCards};

        // we have to iterate in the listOfCards from highest to lowest in order tu be sure that the removed indexes are correct
        const iMax = listOfCards.length;
        for( let i = iMax - 1; i >= 0; i -= 1 ){
            let card = listOfCards[i];
            const suite = card.getAttribute('suite');
            const index = card.parentElement.getAttribute('index');
            const removedCard = cardsCopy.splice(index, 1)[0];
            removedCards[suite].push( removedCard );
            removedCards[suite] = this.sortTheSuite( removedCards[suite] );
            card.classList.remove('selected');
        }
        this.setState({ cards: cardsCopy, removedCards: removedCards, isRemoveAllDisabled: true}, ()=>{this.props.updater( removedCards )});
    }

    sortTheSuite = targetArr => {
        targetArr.sort((a, b) => a.slice(1)- b.slice(1));
        return targetArr;
      };

    removeAllSelected = (evt) => {
        evt.stopPropagation();
        this.removeCards( this.getAListOfAllSelected() );
    }

    removeAllSelectionIndicator = () => {
        this.getAListOfAllSelected().forEach( element => {
            element.classList.remove('selected');
        })
    }

    getAListOfAllSelected = () => {
        return [...document.querySelectorAll('.selected')];
    }

    render = () => {
        return (
            <div id='deckOfCards' onClick={this.cardClicked}>
                <button id='removeSelected' disabled={this.state.isRemoveAllDisabled} onClick={this.removeAllSelected}>Remove Selected</button>
                {this.state.cards.map((card, key) =>(
                    <Card name={card} key={key} id={key}/>
                ))}
            </div>
        )
    }
}
DeckOfCards.propTypes = {
    updater: PropTypes.func.isRequired,
};