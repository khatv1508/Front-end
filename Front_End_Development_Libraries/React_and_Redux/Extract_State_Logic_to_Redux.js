// define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";
const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

const messageReducer = (State = [], action) => {
  switch (action.type) {
    case ADD:
      return [...State, action.message];

    default:
      return State;
  }
};

const store = Redux.createStore(messageReducer);