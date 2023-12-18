const userSetting = (state = [], action) => {
  switch (action) {
    case "USER-SAVE":
      return [...action.payload];
    default:
      return state;
  }
};

export default userSetting;
