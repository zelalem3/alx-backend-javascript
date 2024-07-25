const fs = require('fs');

const countStudents = (aPath) => {
  try {
    let data = fs.readFileSync(aPath, 'utf8').toString().split('\n');
    data = data.slice(1, data.length - 1);
    console.log(`Number of students: ${data.length}`);
    const subjects = {};
    for (const row of data) {
      const student = row.split(',');
      if (!subjects[student[3]]) subjects[student[3]] = [];
      subjects[student[3]].push(student[0]);
    }
    for (const subject in subjects) {
      if (subject) console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
