 'use strict'

 const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

 const addPrefix = () => {
  let nameWithPrefix = 0;

  for (let i = 0; i < names.length; i++) {
    nameWithPrefix = names.map(i => 'Mr ' + i);
  }
  return nameWithPrefix;
 }

 console.log(addPrefix(names));