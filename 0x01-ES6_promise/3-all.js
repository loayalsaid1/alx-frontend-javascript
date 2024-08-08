import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadResult, newUser]) => {
      console.log(
        `${uploadResult.body} ${newUser.firstName} ${newUser.lastName}`,
      );
    })
    .catch(() => console.log('Signup system offline'));
}
