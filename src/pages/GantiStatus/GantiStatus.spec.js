import React from 'react'
import GantiStatus from './GantiStatus'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('Ganti Status', () => {
  it('renders without error', () => {
    act(() => {
      render(<GantiStatus token={'someToken'} />, container)
    })
    expect(container).toBeTruthy()
  })

  it('shows title Ganti Status', () => {
    act(() => {
      render(<GantiStatus token={'someToken'} />, container)
    })
    expect(container.textContent).toContain('Ganti Status')
  })

  it('shows button Ganti Status', () => {
    const wrapper = mount(<GantiStatus token={'someToken'} />)
    expect(wrapper.find('div[name="btn"]').contains('Ganti Status')).toEqual(
      true
    )
  })

  //TODO
  //Cek semua input field yang ada
  it('should change the name state after simulating input on no pesanan', () => {
    const newValue = '2'
    const wrapper = mount(<GantiStatus token={'someToken'} />)
    const input = wrapper.find('input[name="nopesanan"]')

    input.simulate('change', { target: { value: newValue } })
    expect(wrapper.find('input[name="nopesanan"]').prop('value')).toEqual(
      newValue
    )
  })

  it('should change the name state after simulating select on status', () => {
    const newValue = 'Bermasalah'
    const wrapper = mount(<GantiStatus token={'someToken'} />)
    const input = wrapper.find('select[name="status"]')

    input.simulate('change', { target: { value: newValue } })
    expect(wrapper.find('select[name="status"]').prop('select')).toEqual(
      newValue
    )
  })
})
