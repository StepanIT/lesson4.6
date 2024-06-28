  'use strict'

  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

  const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

  const filter = (allStudents , failedStudents) => {

    const newArr = [];
  
    for (let i = 0; i < allStudents.length; i++) {
      for (let x = 0; x < failedStudents.length; x++) {
        if (!(allStudents[i] === failedStudents[x])) {
          newArr.push(allStudents[i]);
        }
        return newArr;
      }
    }
  }

  const newArr = filter(allStudents , failedStudents);
  console.log('newArray:' , newArr);