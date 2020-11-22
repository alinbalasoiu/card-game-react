import ReactDom from 'react-dom';
import Card from './Card';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<Card name={'h5'} id={1}/>, div);
})