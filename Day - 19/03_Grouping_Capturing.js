// Regular expression to capture the area code, central office code, and line number from a US phone number format.
const regex = /(\d{3})[\.\-\s]?(\d{3})[\.\-\s]?(\d{4})/;
const phoneNumbers = [
  "(123) 456-7890",
  "123-456-7890",
  "123.456.7890",
  "1234567890",
];

phoneNumbers.forEach((number) => {
  const match = number.match(regex);
  if (match) {
    const areaCode = match[1];
    const centralOfficeCode = match[2];
    const lineNumber = match[3];
    console.log(
      `Area Code: ${areaCode}, Central Office Code: ${centralOfficeCode}, Line Number: ${lineNumber}`
    );
  } else {
    console.log("No match found");
  }
});


// Regular expression to capture the username and domain from an email address.

const regex1 = /^([^@]+)@([^@]+)$/;
const text1 = "anilsuyal97153@gmail.com"
const match1 = text1.match(regex1);

if (match1) {
    const username = match1[1];  // Part before @
    const domain = match1[2];    // Domain name, before the first dot
  
    console.log(`Username: ${username}`);  // Output: Username: anilsuyal97153
    console.log(`Domain: ${domain}`);      // Output: Domain: gmail
  } else {
    console.log("No match found");
  }