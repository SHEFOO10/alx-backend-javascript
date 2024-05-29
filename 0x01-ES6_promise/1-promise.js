export default function getFullReponseFromApi(sucess) {
  return new Promise((resolve, reject) => {
    if (sucess) {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
    reject(new Error('The fake API is not working currently'));
  });
}
