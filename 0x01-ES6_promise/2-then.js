export default function handleResponseFromApi(promise) {
  return promise.then(() => {
    const response = { status: 200, body: 'success' };
    return response;
  }, () => new Error())
    .finally(() => console.log('Got a response from the API'));
}
