const passwordBox = document.querySelector<HTMLInputElement>('#password');
const copyBtn = document.querySelector<HTMLImageElement>('.copy-icon');
const generatePassBtn = document.querySelector<HTMLButtonElement>('button');

const passwordLength = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '[][]#~=+_-()*&^%$£!/?.>,<';
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(): void {
  if (!passwordBox) {
    return;
  }

  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < passwordLength) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword(): void {
  if (!passwordBox) {
    return;
  }
  navigator.clipboard.writeText(passwordBox.value);
}

generatePassBtn?.addEventListener('click', createPassword);
copyBtn?.addEventListener('click', copyPassword);
