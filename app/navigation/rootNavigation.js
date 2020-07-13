import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  // if the navigationRef.current is not null, then will navigate, if it's null, nothing will happen
  navigationRef.current?.navigate(name, params);
};

export default {
  navigate,
};
