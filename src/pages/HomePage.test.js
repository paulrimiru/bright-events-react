import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import {configure, shallow, mount} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';
import { spy, assert } from 'sinon';

import HomePage from './HomePage';
import GridComponent from '../components/GridComponent';

configure({ adapter: new Adapter() });

describe("Component : HomePage", () => {

    const minProps = {
        events : []
    }

    const emptyWrapper = mount(<HomePage {...minProps} />)

    it("contains a grid to display information", () => {
        const eventsSpy = spy(HomePage, 'renderEvents')
        const eventsWrapper = mount(<HomePage {...minProps} events={["one", "two"]}/>)
        assert.calledOnce(eventsSpy)
        expect(eventsWrapper.find('GridComponent')).to.be.lengthOf(1)
    })
    it("contains a text view if there s no information")
})