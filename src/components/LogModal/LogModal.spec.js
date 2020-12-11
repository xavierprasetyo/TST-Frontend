import React from 'react';
import LogModal from './LogModal';
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";

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

describe('LogModal', () => {
   it('renders when opened', () => {
      act(() => {
         render(<LogModal open={true} />, container);
       });
       setTimeout(() => {
         expect(container.innerHTML).toBeTruthy()
       }, 100)
   });

   it('not rendered when closed', () => {
      act(() => {
         render(<LogModal open={false} />, container);
       });
       expect(container.innerHTML).toBeFalsy()
   });

   it('shows Logout when Authed', () => {
      act(() => {
         render(<LogModal open={true} isAuthed={'someToken'} />, container);
       });
       setTimeout(() => {
         expect(container.textContent).toContain("Log Out")
       }, 100)
   });

   it('shows Login when not Authed', () => {
      act(() => {
         render(<LogModal open={true} isAuthed={''} />, container);
       });
       setTimeout(() => {
         expect(container.textContent).toContain("Log In")
         expect(container.textContent).toContain("input")
       }, 100)
   });
});
