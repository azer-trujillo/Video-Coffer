import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Home from '../../components/home';
import configureStore from '../..//store/store'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


it('should render home', ()=>{
    const store = configureStore();
    const renderer = new ReactShallowRenderer();
    renderer.render(
        <Provider store={store}>
            <Router>
                <Home />
            </Router>
        </Provider>
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})
