import React from 'react';
import Navbar from './Navbar';
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import {
   BrowserRouter as Router,
 } from "react-router-dom";

const url = "localhost"
const routes = [
   {
      name: 'Home',
      path: url
   },
   { 
      name: 'Cari Pesanan',
      path: `${url}/cari`
   },
   {
      name: 'Tambah Pesanan',
      path: `${url}/tambah`
   },
   {
      name: 'Ganti Status',
      path: `${url}/gantiStatus`
   }
]
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Navbar', () => {
   it('renders without error', () => {
      act(() => {
         render(<Navbar isAuthed={''} />, container);
       });
       expect(container).toBeTruthy()
       expect(container.querySelector(".login").textContent).toBe("Log In")
   });

   it('renders authed option', () => {
      act(() => {
         render(
            <Router>
               <Navbar isAuthed={'someToken'} routes={routes} />
            </Router>
         , container);
       });
       expect(container).toBeTruthy()
       expect(container.querySelector(".logout").textContent).toBe("Log Out")
       routes.forEach(item => {
         expect(container.textContent).toContain(item.name)
       })
   });
});
