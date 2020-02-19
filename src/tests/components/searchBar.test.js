import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import SearchBar from '../../components/searchBar';
import configureStore from '../..//store/store'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import {shallow, mount} from 'enzyme';

it('should render home', ()=>{
    const store = configureStore();
    const wrapper = mount(
        <Provider store={store}>
            <Router>
                <SearchBar />
            </Router>
        </Provider>
    );
    expect(wrapper).toMatchSnapshot();
})