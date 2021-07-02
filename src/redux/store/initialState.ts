const initialState = {
  handleTask: {
    tasks: [
      {
        task: "Learn Semantic UI.",
        completed: false,
        dateAdded: new Date(
          "Fri Jul 02 2021 23:50:24 GMT+0200 (Central Africa Time)"
        ).toUTCString(),
        priority: 1,
      },
      {
        task: "Improve Working Speed.",
        completed: false,
        dateAdded: new Date(
          "Fri Jul 02 2021 21:34:24 GMT+0200 (Central Africa Time)"
        ).toUTCString(),
        priority: 2,
      },
      {
        task: "Look good while doing it.",
        completed: false,
        dateAdded: new Date(
          "Fri Jul 02 2021 20:10:24 GMT+0200 (Central Africa Time)"
        ).toUTCString(),
        priority: 3,
      },
    ],
  },
};

export type InitialState = {
  handleTask: Record<string, any>;
};

export default initialState;
