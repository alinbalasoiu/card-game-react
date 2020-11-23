import Card from './Card';
import { render } from '@testing-library/react'

describe('Card renders and have correctly set index, value, suit', () => {
    test('create one card with index, value and suit', () => {
        let name = 'h5';
        let id = 0;
        render(<Card name={name} id={id}/>)
        let truthy = true;
        let cardsList = document.getElementsByClassName('card');
        truthy = cardsList.length === 1 && truthy;
        
        let card = cardsList[0];
        truthy = card.getAttribute('index') === ''+id && truthy;

        let cardClickInterceptor = card.getElementsByClassName('cardClickInterceptor')[0];
        truthy = cardClickInterceptor.getAttribute('value') === name.slice(1) && truthy;
        truthy = cardClickInterceptor.getAttribute('suite') === name[0] && truthy;

        expect(truthy).toBe(true)
      })    
})