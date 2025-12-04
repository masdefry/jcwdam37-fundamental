class User {
  username = '';
  password = '';
  email: string | undefined = '';

  constructor(_username: string, _password: string, _email?: string) {
    this.username = _username;
    this.password = _password;
    this.email = _email;
  }

  greeting() {
    console.log('hello, user!');
  }
}

const user = new User('defryan', 'abc12345', 'def@gmail.com');
const user1 = new User('aboy', 'abc12345', 'aboy@gmail.com');
console.log(user);
console.log(user1);
user.greeting();
user1.greeting();
