import React from 'react';
import Snake from '../Snake';
import './setupTests';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe.only('<Snake />', () => {
  let wrapper 
  beforeEach(() => {
    wrapper = shallow(<Snake />)
  })
  it('Creates snapshots of the snake app', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Counts the amount of divs with classname Cols', () => {
    expect(wrapper.find('div.Cols').length).toBe(625)
  })
  it('Updates the state on the handleClick method', () => {
    const newInstance = wrapper.instance()
    newInstance.handleClick({ target: { value: 'Easy' }})
    expect(wrapper.state().speed).toBe(90)
  })
})

