//import { render,screen } from '@testing-library/react';
import { render , unmountComponentAtNode } from "react-dom";
import List from '../List';
import { act } from "react-dom/test-utils";
   let container = null;
    beforeEach(() => {
      jest.setTimeout(10000);
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    // cleanup on exiting
    global.fetch.mockRestore();
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    
  });
  test('fetchAPI', async () => {
    const response = [
      {
        "id": 1,
        "name": "Annete Watson",
        "marks": 9.3
      },
      {
        "id": 2,
        "name": "Calvin Steward",
        "marks": 8.9
      }];
    jest.spyOn(global, 'fetch').mockImplementation(() => []);
    const mockJsonPromise = Promise.resolve(response);  
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    await act( async () => {render(<List />, container)});
    
    expect(fetch).toHaveBeenCalledTimes(1);
   
  });

