'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

containerApp.style.opacity = 1;

//Creates the username property on each of the accounts
accounts.forEach(function (acc, i) {
  const names = acc.owner.toLowerCase().split(' ');

  acc.username = names
    .map(function (name) {
      return name.slice(0, 1);
    })
    .join('');
});

//FUNCTIONS
//Display movements function
const displayMovements = function (acc) {
  containerMovements.innerHTML = '';

  acc.movements.forEach(function (mov, i) {
    const movementsType = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
           <div class="movements__row">
             <div class="movements__type movements__type--${movementsType}">${
      i + 1
    } ${movementsType}</div>
  
             <div class="movements__value">${mov}€</div>
           </div>
           `;

    containerMovements.insertAdjacentHTML('afterBegin', html);
  });
};

//Display balance function
const displayBalance = function (acc) {
  const balance = acc.movements.reduce(
    (acc, mov) => acc + mov,
    acc.movements[0]
  );
  labelBalance.textContent = balance + '€';
};

//Display money IN

//USER LOGS IN
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const userInput = inputLoginUsername.value;
  const pinInput = inputLoginPin.value;

  accounts.forEach(function (acc) {
    if (userInput === acc.username && pinInput === String(acc.pin)) {
      displayMovements(acc);

      displayBalance(acc);
    }
  });

  inputLoginUsername.value = '';
  inputLoginPin.value = '';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////
