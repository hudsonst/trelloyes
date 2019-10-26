import React from 'react';
import ReactDOM from 'react-dom';
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

});