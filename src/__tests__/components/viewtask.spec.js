import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { getQueriesFromElement } from "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/";
import ViewTask from "../../components/ViewTask";

describe("View Task", () => {
  let container = null;

  beforeAll(() => {
    container = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <ViewTask />
      </Provider>,
      container
    );
  });

  afterAll(() => {
    unmountComponentAtNode(container);
    container = null;
  });

  test("Renders Without Error", () => {
    expect(
      container.querySelector(".view_container__view_task_container").children
        .length
    ).toBe(3);
  });

  //   test("Clicking element should cross it", () => {

  //   });

  //   test("Clicking close button should remove task from list", ()
  //   =>{})
});
