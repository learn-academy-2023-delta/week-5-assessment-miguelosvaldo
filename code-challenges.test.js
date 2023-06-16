// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codingMessage", () => {
    it("returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        expect(codingMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"      
        expect(codingMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codingMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
                //FIRST TEST =  ReferenceError: codingMessage is not defined
                //SECOND TEST = passed

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
const codingMessage = (string) => {
    var codedMessage = string.replace(/a/g, '4').replace(/e/g, '3').replace(/i/g, '1').replace(/o/g, '0').replace(/E/g, '3');
    return codedMessage;
  }

// Pseudo code:
            //going to create a function called codingMessage that takes in a string and returns a string 
            //going to declare a variable called codedMessage and assign it to the string parameter
            //going to run .replace() on the parameter that is being passed through
            //.replace() method will take two arguments, one stating what we want to target, here being a vowel. Followed by the letter g that will target every instance of that vowel.
            //going to single out the capital letter E with the same .replace() method and replace it with the number 3
            //going to return variable codedMessage


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("particularLetter", () => {
    it("returns a string with a coded message", () => {
        
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

        const filterLetterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]

        expect(particularLetter(fruitArray, filterLetterA)).toEqual(expect.arrayContaining(["Mango", "Apricot", "Peach"]))
        const filterLetterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
       
        expect(particularLetter(fruitArray, filterLetterE)).toEqual(expect.arrayContaining(["Cherry", "Blueberry", "Peach"]))

    })
  })

                //FIRST TEST =  ReferenceError: particularLetter is not defined
                //SECOND TEST = passed


const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

const particularLetter = (array, letter) => {
    return array.filter(value => {
      return value.split('').some(fruit => fruit === letter || fruit === letter.toUpperCase())
    })                      
  }
// Pseudo code:

            //create a function called particularLetter that will take in two parameters, array and letter
            //going to use HOF filter to iterate on array
            //going to use .split('') to access each letter in the element
            //goint to use .some() since we are calling on an array, it will check each element returning a boolean value if condition is met
            //Going to evaluate if letter in the element match given letters arguments using the OR logical operator. And, attaching .tuUpperCase to check for upper case letters


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.



// a) Create a test with expect statements using the variable provided.

describe("isItOrNot", () => {
    it("determines whether or not the array is a 'full house'", () => {
        
         const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
      expect(isItOrNot(hand1)).toEqual((true))
         const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
      
      expect(isItOrNot(hand2)).toEqual((false))
         const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
    
      expect(isItOrNot(hand3)).toEqual((false))
         const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
  
      expect(isItOrNot(hand4)).toEqual((true))

    })
  })

                    //ReferenceError: isItOrNot is not defined
                    //SECOND TEST: passed

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
const isItOrNot = (numbers) => {
   
    let count = numbers.reduce((map, num) => {
      map[num] = (map[num] || 0) + 1;
      return map;
    }, {}); // reduce is used to count instances of each number in the array and stores the count in an object.
  
    const values = Object.values(count);
    const fullHouse = values.includes(2) && values.includes(3);

    return fullHouse;
  }
  
      


// Pseudo code:

            //create a function called isItOrNot that takes a parameter of numbers
            //set a varable of count which contains the reduce hof
            //reduce() will run on the array and count the instantces of each number within the array, and store them in count 
            //reduce contains two arguments map will store the count of each number and num is the current number being passed
            //inside the function we use the code provided to update the count of each number provided in the array
            //map[num] will determine if we have counted the number or not, if so it will increase count by one, if not it will start the count of that number by one
            //will store the repeating instances of each value in an object
            //object.values extracts count of each number from the object, value.includes checks if the extracted values are paired or in threes completed the full house condition
