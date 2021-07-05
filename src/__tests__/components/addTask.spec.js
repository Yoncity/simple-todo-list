import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import { Provider } from "react-redux";
import store from "../../redux/store/";
import AddTask from "../../components/AddTask";

describe("Add Task", () => {
  let container = null;

  beforeAll(() => {
    container = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <AddTask />
      </Provider>,
      container
    );
  });

  afterAll(() => {
    unmountComponentAtNode(container);
    container = null;
  });

  test("Should Render Without Error", () => {
    const { getByText } = getQueriesForElement(container);
    expect(getByText("+ ADD")).not.toBeNull();
  });
});
