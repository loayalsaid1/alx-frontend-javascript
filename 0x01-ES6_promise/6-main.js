import handleProfileSignup from './6-final-user';

let x = handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");

x.then((r) => console.log(r))
