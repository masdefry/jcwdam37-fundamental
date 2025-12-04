class BankAccount {
  #balance: number = 0;

  constructor(_balance: number) {
    this.#balance = _balance;
  }

  set deposit(amount: number) {
    this.#balance += amount;
  }

  get getBalance() {
    return this.#balance;
  }
}

const accountCustomer1 = new BankAccount(10000000);
accountCustomer1.deposit = 3000000;
console.log(accountCustomer1.getBalance);
console.log(accountCustomer1);



/*
    Static Property: 
    - Property yang melekat pada class
    - Tidak perlu didefinisikan menggunakan new
    - Bisa di akses dimanapun / diakses secara global
*/
class DB {
  static #connection = '';

  static #initializeConnection() {
    const randomNum = Math.ceil(Math.random() * 100);
    DB.#connection = `New Database Connection ${randomNum}`;
  }

  static getConnection() {
    if (!DB.#connection) {
      DB.#initializeConnection();
    }
    return DB.#connection;
  }
}
console.log(DB.getConnection());
console.log(DB.getConnection());
