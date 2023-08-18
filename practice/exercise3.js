const prompt = require("prompt-sync")();

// const dog = {
//     name: 'Leo',
//     legs: 4,
//     colour: 'brown',
//     age: '3 years',
//     bark: function(){
//         return "woof woof";
//     }
// };

// dog.breed = "Lebra"
// dog.getDogInfo = () => {
//     console.log(dog.name)
//     console.log(dog.legs)
//     console.log(dog.colour)
//     console.log(dog.age)
//     console.log(dog.bark())
//     console.log(dog.breed)
// }
// dog.getDogInfo()

// --------------------------------------------------------------

// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
// .............................................................
//   let count = 0;

//   for (const user in users) {
//     if(users[user].isLoggedIn){
//         count++;
//     }
//   }

//   console.log('Logged In users count: ', count)
// .............................................................
// const developers = [];

//   for (const user in users) {
//     const userskills = users[user].skills;
//     if(userskills.includes('MongoDB') && userskills.includes('Express') && userskills.includes('React') && userskills.includes('Node')){
//         developers.push(user)
//     }
//   }

//   console.log('Mern Developers: ', developers)
// .............................................................

// users.Khushal = {
//   email: 'khushalmajoka@gmail.com'
// }

// console.log(users)
// .............................................................

// console.log(Object.keys(users))
// console.log(Object.values(users))

// ----------------------------------------------------------------

// const users = [
//   {
//     _id: 'ab12ex',
//     username: 'Alex',
//     email: 'alex@alex.com',
//     password: '123123',
//     createdAt: '08/01/2020 9:00 AM',
//     isLoggedIn: false,
//   },
//   {
//     _id: 'fg12cy',
//     username: 'Asab',
//     email: 'asab@asab.com',
//     password: '123456',
//     createdAt: '08/01/2020 9:30 AM',
//     isLoggedIn: true,
//   },
//   {
//     _id: 'zwf8md',
//     username: 'Brook',
//     email: 'brook@brook.com',
//     password: '123111',
//     createdAt: '08/01/2020 9:45 AM',
//     isLoggedIn: true,
//   },
//   {
//     _id: 'eefamr',
//     username: 'Martha',
//     email: 'martha@martha.com',
//     password: '123222',
//     createdAt: '08/01/2020 9:50 AM',
//     isLoggedIn: false,
//   },
//   {
//     _id: 'ghderc',
//     username: 'Thomas',
//     email: 'thomas@thomas.com',
//     password: '123333',
//     createdAt: '08/01/2020 10:00 AM',
//     isLoggedIn: false,
//   },
// ]

// const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 },
//     ],
//     likes: [],
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy'],
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy'],
//   },
// ]

// function signUp(newUser) {
//   // Check if the username or email is already taken
//   const isUsernameTaken = users.some(user => user.username === newUser.username);
//   const isEmailTaken = users.some(user => user.email === newUser.email);

//   if (isUsernameTaken || isEmailTaken) {
//     return "Username or email already exists. You have an account.";
//   }

//   // Generate a new _id (this is typically handled by the database)
//   const newId = Math.random().toString(36).substr(2, 6);

//   // Add the new user to the collection
//   users.push({
//     _id: newId,
//     ...newUser,
//     createdAt: new Date().toLocaleString(),
//     isLoggedIn: false,
//   });

//   return "Sign-up successful!";
// }

// Usage example:
// const newUser = {
//   username: 'John',
//   email: 'john@example.com',
//   password: 'password123',
// };

// const signUpResult = signUp(newUser);
// console.log(signUpResult);
// console.log(users);

// function signIn(username, password) {
//   const user = users.find(user => user.username === username && user.password === password);

//   if (user) {
//     user.isLoggedIn = true;
//     return "Sign-in successful!";
//   } else {
//     return "Invalid username or password. Please try again.";
//   }
// }

// // Usage example:
// const signInResult = signIn('Alex', '123123'); // Replace with actual username and password
// console.log(signInResult);

// const name = <h1>Hello Khushal!</h1>

const user = (
  <>
  <header>
  <h1>Khushal Majoka</h1>
  <p>India, Software Engineer, Male, khushalmajoka@gmail.com, 9034165116</p>
  </header>
  <footer>
  <p>&copy; 2023 khushalmajoka.dev All rights reserved.</p>
  </footer>
  </>
)