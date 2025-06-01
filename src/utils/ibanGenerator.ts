
export interface Country {
  code: string;
  name: string;
  ibanLength: number;
  bankCodeLength: number;
  accountNumberLength: number;
  example: string;
}

export const countries: Country[] = [
  { code: 'DE', name: 'Germany', ibanLength: 22, bankCodeLength: 8, accountNumberLength: 10, example: 'DE89 3704 0044 0532 0130 00' },
  { code: 'GB', name: 'United Kingdom', ibanLength: 22, bankCodeLength: 4, accountNumberLength: 14, example: 'GB29 NWBK 6016 1331 9268 19' },
  { code: 'FR', name: 'France', ibanLength: 27, bankCodeLength: 5, accountNumberLength: 16, example: 'FR14 2004 1010 0505 0001 3M02 606' },
  { code: 'IT', name: 'Italy', ibanLength: 27, bankCodeLength: 5, accountNumberLength: 16, example: 'IT60 X054 2811 1010 0000 0123 456' },
  { code: 'ES', name: 'Spain', ibanLength: 24, bankCodeLength: 4, accountNumberLength: 16, example: 'ES91 2100 0418 4502 0005 1332' },
  { code: 'NL', name: 'Netherlands', ibanLength: 18, bankCodeLength: 4, accountNumberLength: 10, example: 'NL91 ABNA 0417 1643 00' },
  { code: 'BE', name: 'Belgium', ibanLength: 16, bankCodeLength: 3, accountNumberLength: 9, example: 'BE68 5390 0754 7034' },
  { code: 'CH', name: 'Switzerland', ibanLength: 21, bankCodeLength: 5, accountNumberLength: 12, example: 'CH93 0076 2011 6238 5295 7' },
  { code: 'AT', name: 'Austria', ibanLength: 20, bankCodeLength: 5, accountNumberLength: 11, example: 'AT61 1904 3002 3457 3201' },
  { code: 'PT', name: 'Portugal', ibanLength: 25, bankCodeLength: 4, accountNumberLength: 17, example: 'PT50 0002 0123 1234 5678 9015 4' },
];

function generateRandomDigits(length: number): string {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
}

function generateRandomLetters(length: number): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({ length }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
}

function mod97(iban: string): number {
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numericString = rearranged.replace(/[A-Z]/g, (char) => (char.charCodeAt(0) - 55).toString());
  
  let remainder = 0;
  for (let i = 0; i < numericString.length; i++) {
    remainder = (remainder * 10 + parseInt(numericString[i])) % 97;
  }
  return remainder;
}

function calculateCheckDigits(countryCode: string, bankCode: string, accountNumber: string): string {
  const tempIban = countryCode + '00' + bankCode + accountNumber;
  const remainder = mod97(tempIban);
  const checkDigits = (98 - remainder).toString().padStart(2, '0');
  return checkDigits;
}

export function generateIBAN(countryCode: string): string {
  const country = countries.find(c => c.code === countryCode);
  if (!country) {
    throw new Error('Country not supported');
  }

  let bankCode: string;
  let accountNumber: string;

  switch (countryCode) {
    case 'DE':
      bankCode = generateRandomDigits(8);
      accountNumber = generateRandomDigits(10);
      break;
    case 'GB':
      bankCode = generateRandomLetters(4);
      accountNumber = generateRandomDigits(6) + generateRandomDigits(8);
      break;
    case 'FR':
      bankCode = generateRandomDigits(5);
      accountNumber = generateRandomDigits(11) + generateRandomLetters(2) + generateRandomDigits(2);
      break;
    case 'IT':
      bankCode = generateRandomLetters(1) + generateRandomDigits(5);
      accountNumber = generateRandomDigits(11);
      break;
    case 'ES':
      bankCode = generateRandomDigits(4);
      accountNumber = generateRandomDigits(4) + generateRandomDigits(2) + generateRandomDigits(10);
      break;
    case 'NL':
      bankCode = generateRandomLetters(4);
      accountNumber = generateRandomDigits(10);
      break;
    case 'BE':
      bankCode = generateRandomDigits(3);
      accountNumber = generateRandomDigits(7) + generateRandomDigits(2);
      break;
    case 'CH':
      bankCode = generateRandomDigits(5);
      accountNumber = generateRandomDigits(12);
      break;
    case 'AT':
      bankCode = generateRandomDigits(5);
      accountNumber = generateRandomDigits(11);
      break;
    case 'PT':
      bankCode = generateRandomDigits(4);
      accountNumber = generateRandomDigits(4) + generateRandomDigits(11) + generateRandomDigits(2);
      break;
    default:
      bankCode = generateRandomDigits(country.bankCodeLength);
      accountNumber = generateRandomDigits(country.accountNumberLength);
  }

  const checkDigits = calculateCheckDigits(countryCode, bankCode, accountNumber);
  const iban = countryCode + checkDigits + bankCode + accountNumber;
  
  return formatIBAN(iban);
}

export function formatIBAN(iban: string): string {
  return iban.replace(/(.{4})/g, '$1 ').trim();
}
