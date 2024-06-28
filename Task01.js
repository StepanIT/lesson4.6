  'use strict'

  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

  const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

  const filter = (allStudents , failedStudents) => {

    const newArr = [];
  
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents.includes('Сидоров', 'Смирнов', 'Попов')) {
          newArr[i] = allStudents.filter(item => !failedStudents.includes(item));
        }
        return newArr;
      }
    }

  const newArr = filter(allStudents , failedStudents);
  console.log('newArray:' , newArr);
