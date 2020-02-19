import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {LoginPage} from '../../components/login';
import configureStore from '../..//store/store'
import { Provider } from "react-redux";

import {shallow, mount} from 'enzyme';


it('should render login', ()=>{
    const store = configureStore();
    const wrapper = mount(
        <Provider store={store}>
        <LoginPage />
        </Provider>
        
          
    );
    expect(wrapper).toMatchSnapshot();
})
