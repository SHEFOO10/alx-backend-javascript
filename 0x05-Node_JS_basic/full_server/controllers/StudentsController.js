import readDatabase from '../utils'

class StudentsController {
  static getAllStudents(request, response) {
    const responseText = ['This is the list of our students'];
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath)
      .then((res) => {
	responseText.push(...res.responseText)
        response.send(responseText.join('\n'));
      })
      .catch((err) => {
	response.status(500).send(err[0]);
      });
  }
  static getAllStudentsByMajor(request, response) {
    const majors = ['CS', 'SWE'];
    if (!majors.includes(request.params.major)) response.status(500).send('Major parameter must be CS or SWE');
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath)
      .then((data) => {
        response.send(`List: ${data.fieldNames[request.params.major].join(', ')}`);
      })
      .catch((err) => {
        response.status(500).send(err[0]);
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
