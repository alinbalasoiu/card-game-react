import ReactDom from 'react-dom';
import DeckOfCards from '../deckOfCards/DeckOfCards';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<DeckOfCards updater={()=>{console.log('updater called')}}/>, div);
})