import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('App', () => {
    it('should render app component', () => {
        var component = mount(<App />);

        assert.equal(component.find('App').length, 1);
    });
})