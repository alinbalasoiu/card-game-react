import DeckOfCards from '../deckOfCards/DeckOfCards';
import { render } from '@testing-library/react'

describe('DeckOfCards renders a deck with 52 cards', () => {
    test('create a deck of 52 cards', () => {
        render(<DeckOfCards updater={()=>{console.log('testing the DeckOfCards')}}/>)
        let cardsList = document.getElementsByClassName('card');
        expect(cardsList).toHaveLength(52)
      })    
})