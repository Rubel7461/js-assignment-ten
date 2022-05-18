


/**
 * Class 10 Assignment here....
*/

// Create an email pattern.....


const emails = 'developerrubel.me@bd.com';
const email_pattern = /^[a-z][a-z0-9.]{3,20}@[a-z]{2,7}\.[a-z]{2,5}$/;

if (email_pattern.test(emails)) {
    console.log(`You'r emails ❤️Right❤️ Now.`);
} else {
    console.log(`You'r emails 😢Wrong😢 Now.`);
}


// Done....


// Create a  username pattern......

const user = 'devrubel';
const user_pattern = /[a-z]{6,12}/;

// Don't allow any number and carracter...

if (user_pattern.test(user)) {
    console.log(`You'r user_name ❤️Right❤️ Now.`);
} else {
    console.log(`You'r user_name 😢Wrong😢 Now.`);
}

// Done....

// Create a Bangladeshi phone number pattern.......


const phone= '8801778216462'
const phone_pattern = /^(\+8801|8801|017|01|880)[0-9]{9}$/;


if (phone_pattern.test(phone)) {
    console.log(`You'r phone ❤️Right❤️ Now.`);
} else {
    console.log(`You'r phone 😢Wrong😢 Now.`);
}


// Done....

// Create a password pattern.......

const password= 'ad^~asdfwer*|a0';
const password_pattern = /^[a-zA-Z0-9~!@#$%^&*(){}"|?><]*$/i;

if (password_pattern.test(password)) {
    console.log(`You'r password ❤️Right❤️ Now.`);
} else {
    console.log(`You'r password 😢Wrong😢 Now.`);
}


// Done....

// Create a zipcode pattern .....


const zipcode = '573458-A4';
const zipcode_pattern = /^[0-9a-zA-Z:-]{4,11}$/;

if (zipcode_pattern.test(zipcode)) {
    console.log(`You'r zipcode ❤️Right❤️ Now.`);
} else {
    console.log(`You'r zipcode 😢Wrong😢 Now.`);
}


// Done....

