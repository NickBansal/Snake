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
  it('Updates the state on the handleClick method and renders new text', () => {
    const newInstance = wrapper.instance()
    newInstance.handleClick({ target: { value: 'Easy' }})
    expect(wrapper.state().speed).toBe(90)
    newInstance.handleClick({ target: { value: 'Hard' }})
    expect(wrapper.state().speed).toBe(40)
    expect(wrapper.find('p').first().text()).toBe("Press Space to Pause")
    expect(wrapper.find('p').last().text()).toBe("Press the Arrow Keys to Resume")
  })
})

