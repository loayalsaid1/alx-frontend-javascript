import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then(([result1, result2]) => [
    {
      status: result1.status,
      value: result1.status === 'fulfilled' ? result1.value : result1.reason,
    },
    {
      status: result2.status,
      value: result2.status === 'fulfilled' ? result2.value : result2.reason,
    },
  ]);
}
