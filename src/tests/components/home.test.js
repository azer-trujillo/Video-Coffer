import React from 'react';
import {shallow, mount} from 'enzyme';
import {Home} from '../../components/home';
import configureStore from '../..//store/store'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


it('should render home', ()=>{
    const store = configureStore();
     const wrapper = mount(
        <Provider store={store}>
        <Router>
        <Home/>
        </Router></Provider>
    );
    expect(wrapper).toMatchSnapshot();

})

