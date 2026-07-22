// push() -> Add at the end
// unshift() -> Add at the beginning

// Task 5: Compare push() and unshift()

let movies = ["Avatar", "Titanic"];

console.log("Before:", movies);

// Add at the end
movies.push("Inception");
console.log("After push():", movies);

// Add at the beginning
movies.unshift("Interstellar");
console.log("After unshift():", movies);

console.log("Length:", movies.length);