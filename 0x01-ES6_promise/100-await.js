import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let response;
  let user;
  try {
    [response, user] = await Promise.all([uploadPhoto(), createUser()]);
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
  return {
    photo: response,
    user,
  };
}
