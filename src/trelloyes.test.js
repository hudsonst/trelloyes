import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import Card from './Card';
import App from './App';
import STORE from './STORE';


describe('Trelloyes component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App store={STORE} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Card', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card title='Test Title' content='Test Content' />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders List', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key='1' header='Test header' cards={['b', 'c', 'd', 'f', 'h', 'i', 'k']} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<App store={STORE} />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
        });
    
    it('renders List as expected', () => {
            const tree = renderer
              .create(<List key='1' header='Test header' cards={['b', 'c', 'd', 'f', 'h', 'i', 'k']} />)
              .toJSON();
            expect(tree).toMatchSnapshot();  
            });

    it('renders Card as expected', () => {
            const tree = renderer
              .create(<Card title='Test Title' content='Test Content' />)
              .toJSON();
            expect(tree).toMatchSnapshot();  
            });
    
});