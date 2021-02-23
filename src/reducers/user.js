const intitialState = {
  username: 'Josue',
  location: 'USA',
};

const user = (state = intitialState, action) => {
  switch (action.type) {
    case '':
      return {};
    default:
      return state;
  }
};

export default user;
