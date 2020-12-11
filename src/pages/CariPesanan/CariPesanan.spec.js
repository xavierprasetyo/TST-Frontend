import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import CariPesanan from './CariPesanan'

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

describe('Cari Pesanan', () => {
  it('renders without error', () => {
    act(() => {
      render(<CariPesanan token={'someToken'} />, container)
    })
    expect(container).toBeTruthy()
  })

  it('shows title Cari Pesanan', () => {
    act(() => {
      render(<CariPesanan token={'someToken'} />, container)
    })
    expect(container.textContent).toContain('Cari Pesanan')
  })

  it('shows button Cari', () => {
   const wrapper = mount(<CariPesanan token={'someToken'} />)
   expect(wrapper.find('div[name="btn"]').contains('Cari')).toEqual(
     true
   )
 })

  //TODO
  //Cek semua input field yang ada
  it('should change the name state after simulating input on no pesanan', () => {
    const newValue = '2'
    const wrapper = mount(<CariPesanan token={'someToken'} />)
    const input = wrapper.find('input[name="nopesanan"]')

    input.simulate('change', { target: { value: newValue } })
    expect(wrapper.find('input[name="nopesanan"]').prop('value')).toEqual(
      newValue
    )
  })

//Test Fail due to Material-UI DataGrid
// it('render axios result', (done) => {
//    const newValue = 'testing component';
//    const response = {
//       data : {
//          pesanan :  {
//             id: 1,
//             no_pesanan: 13,
//             nama_pemesan: 'Gon',
//             no_telp: '121312',
//             timestamp:  new Date().toDateString(),
//             jumlah_cucian: 30,
//             berat_cucian: 30,
//             status: 'dibayar',
//             harga_bayar: "30000",
//             estimasi_selesai:  new Date().toDateString(),
//             nama_layanan: 'reguler'
//          }
//       }
//    }

//    let wrapper
//    act(() => {
//       wrapper = mount(<CariPesanan token={'someToken'}/>);

//       axios.get.mockImplementationOnce(() => Promise.resolve(response));

//       wrapper.find('input[name="nomor"]').simulate('change', { target: { value: newValue }});
//       wrapper.find('div[name="btn"]').simulate('click')
//    })

  
//    setTimeout(()=> {
//       console.log(wrapper.html());
//       expect(wrapper.text().includes('Gon')).toEqual(true);
//       done()
//    },500)
// });
})
