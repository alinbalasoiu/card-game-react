import ReactDom from 'react-dom';
import CardFace from './CardFace';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<CardFace name={'h5'} width={'100'} />, div);
})