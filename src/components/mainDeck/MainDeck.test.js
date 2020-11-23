import MainDeck from './MainDeck';
import { render } from '@testing-library/react'

describe('MainDeck renders a deck with 52 cards', () => {
    test("renders without crashing", () => {
        render(<MainDeck />)
    })
    test('create a deck of 52 cards', () => {
        render(<MainDeck />)
        let cardsList = document.getElementsByClassName('card');
        expect(cardsList).toHaveLength(52)
      })    
})

  
