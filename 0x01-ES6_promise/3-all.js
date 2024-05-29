import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      const [response, user] = data;
      console.log(`${response.body} ${user.firstName} ${user.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
