import React from 'react';

//Creates context object
//context object - data type of an object that can be used to store information that can be shared to other components within the app
//context object is a different approach to passing information between components and allows us for easier accesss by avoiding the use of prop drilling

const UserContext = React.createContext();

//Provider component allows other components to consume the context object and supply the necessary information needed to the context object
export const UserProvider = UserContext.Provider

export default UserContext;