  'use strict'

  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

  const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

  const newArr = allStudents.filter(student => {
    if (!failedStudents.includes(student)) {
      return true;
    }
  });
    console.log(newArr);
