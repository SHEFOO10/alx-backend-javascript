export default function handleResponseFromApi(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
  });
}
