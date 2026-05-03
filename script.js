// --- PART 1: Time-based Greeting ---

// 3. Ask for the user's name
const userName = prompt("What is your name?");

// 4. Get the current hour (0-23)
let currentHour = new Date().getHours();

// 5. If-else structure for personalized greeting
let greeting = "";

if (currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

console.log(`${greeting}, ${userName}!`);


// --- PART 2: Age and Days Lived Verification ---

// 6. Ask for birth year
let birthYear = prompt("What year were you born?");

// 7. Calculate age (Targeting current year 2026 as per handout)
let age = 2026 - birthYear;

// 8. Calculate approximate days lived
let daysLived = age * 365;
console.log(`You have lived for approximately ${daysLived} days!`);

// 9. Age verification logic
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
