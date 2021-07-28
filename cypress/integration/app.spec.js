describe("Renders HomePage", () => {
  it("Should Render HomePage Correctly", () => {
    cy.visit("/");
    cy.get(".container").should("exist");
    cy.get("#addTaskFieldInput").should("exist");
    cy.get(
      ".add_task_input_container__input_container__add_task_button"
    ).should("exist");
  });

  describe("Should Add/Cross/Remove Tasks", () => {
    before(() => {
      cy.visit("/");
    });

    describe("Should Add Tasks", () => {
      const newTask = {
        task: "New Task",
        priority: 3,
        dateAdded: new Date().toUTCString(),
      };

      beforeEach(() => {
        cy.get("#addTaskFieldInput").clear();
      });

      it("Should Add a new task", () => {
        cy.get("#addTaskFieldInput").type(newTask.task);
        cy.get(
          ".add_task_input_container__input_container__add_task_button"
        ).click();
        cy.window()
          .its("store")
          .invoke("getState")
          .then((state) => {
            expect(state.handleTask.tasks[0].task).equals(newTask.task);
          });
      });

      it("Should Add a new task with specific priority", () => {
        cy.get("#addTaskFieldInput").type(newTask.task);
        cy.get(".add_task_input_container__input_container__priorities").select(
          "3"
        );
        cy.get(
          ".add_task_input_container__input_container__add_task_button"
        ).click();
        cy.window()
          .its("store")
          .invoke("getState")
          .then((state) => {
            expect(state.handleTask.tasks[0].task).equals(newTask.task);
            expect(state.handleTask.tasks[0].priority).equals(newTask.priority);
          });
      });
    });

    describe("Should Cross/Remove Tasks", () => {
      it("Should cross a task", () => {
        cy.get(
          ":nth-child(1) > .view_container__view_task_container__task_container__task_info"
        ).click();

        cy.window()
          .its("store")
          .invoke("getState")
          .then((state) => {
            expect(state.handleTask.tasks[0].completed).equal(123456);
          });
      });

      it("Should remove a task", () => {
        let oldTotalTasks = 0;
        cy.window()
          .its("store")
          .invoke("getState")
          .then((state) => {
            oldTotalTasks = state.handleTask.tasks.length;
          });

        const closeButton = cy.get(":nth-child(1) > span > .close");
        closeButton.click();

        cy.window()
          .its("store")
          .invoke("getState")
          .then((state) => {
            let currentTotalTasks = state.handleTask.tasks.length;
            expect(oldTotalTasks).to.not.equal(currentTotalTasks);
          });
      });
    });
  });
});
