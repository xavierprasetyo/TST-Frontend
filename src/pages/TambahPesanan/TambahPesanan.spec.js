import React from 'react'
import TambahPesanan from './TambahPesanan'
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

describe('TambahPesanan', () => {
  it('renders without error', () => {
    act(() => {
      render(<TambahPesanan token={'someToken'} />, container)
    })
    expect(container).toBeTruthy()
  })

  // cek title
  it('shows title Tambah Pesanan', () => {
    act(() => {
      render(<TambahPesanan token={'someToken'} />, container)
    })
    expect(container.textContent).toContain('Tambah Pesanan')
  })

  // cek button

  it('shows button Tambah', () => {
    const wrapper = mount(<TambahPesanan token={'someToken'} />)
    expect(wrapper.find('div[name="btn"]').contains('Tambah')).toEqual(
      true
    )
  })

  // Cek input dan option
  // Cek semua input field yang ada
  it('should change the name state after simulating input on nama', () => {
    const newValue = 'testing component'
    const wrapper = mount(<TambahPesanan token={'someToken'}/>)
    const input = wrapper.find('input[name="nama"]')

    input.simulate('change', { target: { value: newValue } })
    expect(wrapper.find('input[name="nama"]').prop('value')).toEqual(newValue)
  })

  it('should change the name state after simulating input on nomor telepon', () => {
    const newValue = '0813131'
    const wrapper = mount(<TambahPesanan token={'someToken'}/>)
    const input = wrapper.find('input[name="noTelp"]')

    input.simulate('change', { target: { value: newValue } })
    expect(wrapper.find('input[name="noTelp"]').prop('value')).toEqual(newValue)
  })

  it('should change the name state after simulating input on jumlah cucian', () => {
    const newValue = 10
    const wrapper = mount(<TambahPesanan token={'someToken'}/>)
    const input = wrapper.find('input[name="jumlah"]')

    input.simulate('change', { target: { value: newValue } })
    expect(wrapper.find('input[name="jumlah"]').prop('value')).toEqual(newValue)
  })

  it('should change the name state after simulating input on berat cucian', () => {
    const newValue = 2
    const wrapper = mount(<TambahPesanan token={'someToken'}/>)
    const input = wrapper.find('input[name="berat"]')

    input.simulate('change', { target: { value: newValue } })
    expect(wrapper.find('input[name="berat"]').prop('value')).toEqual(newValue)
  })

  // yang jenis layanan itu option
  it('should change the name state after simulating input on opsi layanan', () => {
    const newValue = 'Reguler'
    const wrapper = mount(<TambahPesanan token={'someToken'}/>)
    const input = wrapper.find('select[name="layanan"]')

    input.simulate('change', { target: { value: newValue } })
    expect(wrapper.find('select[name="layanan"]').prop('select')).toEqual(newValue)
  })
})
