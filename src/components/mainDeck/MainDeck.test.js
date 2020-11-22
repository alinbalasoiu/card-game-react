import ReactDom from 'react-dom';
import MainDeck from './MainDeck';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<MainDeck />, div);
})
