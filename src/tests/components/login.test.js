import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {LoginPage} from '../../components/login';
import configureStore from '../..//store/store'
import { Provider } from "react-redux";


it('should render login', ()=>{
    const store = configureStore();
    const renderer = new ReactShallowRenderer();
    renderer.render(
        <Provider store={store}>
        <LoginPage />
        </Provider>
        
          
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})
