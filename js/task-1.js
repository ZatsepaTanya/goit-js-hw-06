import users from "./users.js";
// task-1
 const getUserNames = users => users.map(user => user.name);
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
  
  // task-2
  const getUsersWithEyeColor = (users, color) => users.filter(user => color === user.eyeColor);
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

    // task-3
    const getUsersWithGender = (users, gender) => {
    const getGender = users.filter(user => gender === user.gender);
    return getGender.map(user => user.name)
    };
    
    console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
  
    // task-4
    const getInactiveUsers = users => users.filter(user => user.isActive === false);
    
    console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
    
    // task-5
    const getUserWithEmail = (users, email) => {
      // твой код
    };
    
    console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
    console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}