//import { render,screen } from '@testing-library/react';
import { render , unmountComponentAtNode } from "react-dom";
import Card from '../Card';
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
    const response = [{
      "id": 1,
      "title": "Students",
      "type": "profiles",
      "line1": 62
    },
    {
      "id": 2,
      "title": "Average Markes",
      "type": "calculation",
      "line1": 6.8
    }];
    jest.spyOn(global, 'fetch').mockImplementation(() => []);
    const mockJsonPromise = Promise.resolve(response);  
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    await act( async () => {render(<Card />, container)});
    //act(() => {jest.advanceTimersByTime(50);});
    
    expect(fetch).toHaveBeenCalledTimes(2);
   
  });

