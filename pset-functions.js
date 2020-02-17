/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line
// logic for blackJack
function blackJack(playerCardScore, dealerCardScore) {
  // making sure we're playing poker
  if (isNaN(parseInt(playerCardScore))|| isNaN(parseInt(dealerCardScore))) {
    return "Doesn't look like you're playing Black Jack"
  } else if (playerCardScore > 21 && dealerCardScore > 21) {
    // if both players bust
    return 0
  } else if (playerCardScore > 21 && dealerCardScore <= 21) {
    // if player busts
    return dealerCardScore
  } else if (playerCardScore <= 21 && dealerCardScore > 21) {
    // if dealer busts
    return playerCardScore
  } else if (playerCardScore > dealerCardScore) {
    // if player's hand is better
    return playerCardScore
  } else if (dealerCardScore > playerCardScore) {
    return dealerCardScore
  } else if (playerCardScore === dealerCardScore) {
    return playerCardScore
  }
}

// test cases
console.log(blackJack(19, 21))
console.log(blackJack(22, 22))
console.log(blackJack(19, 22))
console.log(blackJack(21, 21))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line
function scrabbleScore(word) {
  let score = 0

  // make sure it's a string
  // testing whether a string is an actual word
  // (or an accepted Scrabble word)
  // is much harder
  if (typeof word === "string") {
    word = word.toLowerCase()
  } else {
    return "scrabbleScore() requires a string parameter."
  }

  // going through character and giving them points values
  for (i = 0; i < word.length; i++) {
    if (word[i] === 'q' || word[i] === 'z') {
      score += 10
    } else if (word[i] === 'j' || word[i] === 'x') {
      score += 8
    } else if (word[i] === 'k') {
      score += 5
    } else if (word[i] === 'f' || word[i] === 'h' || word[i] === 'v' || word[i] === 'w' || word[i] === 'y') {
      score += 4
    } else if (word[i] === 'b' || word[i] === 'c' || word[i] === 'm' || word[i] === 'p') {
      score += 3
    } else if (word[i] === 'd' || word[i] === 'g') {
      score += 2
    } else if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'l' || word[i] === 'n' || word[i] === 'r' || word[i] === 's' || word[i] === 't') {
      score += 1
    }
  }
  return score
}

// test cases
console.log(scrabbleScore("cabbage"))
console.log(scrabbleScore("javascript"))
console.log(scrabbleScore("function"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

// Add your code below this line
// creating palindrome function
function isPalindrome(word) {

  // creating result variable
  let result

  // making sure we're dealing with a string
  if (typeof word === "string") {
    word = word.toLowerCase()
  } else {
    return "isPalindrome() requires a string parameter."
  }

  // palindrome logic
  for (i = 0; i < (word.length / 2); i++) {
    if (word[i] === word[word.length - (1 + i)]) {
      // do nothing
    } else {
      result = false
    }
  }

  // now evaluating whole word
  if (result === false) {
    return false
  } else {
    return true
  }
}

// test cases
console.log(isPalindrome("noon"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("moon"))
console.log(isPalindrome("run"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line
function doubleLetters(word) {

  // creating result variable
  let result

  // making sure we're dealing with a string
  if (typeof word === "string") {
    word = word.toLowerCase()
  } else {
    return "doubleLetters() requires a string parameter."
  }

  // double adjacent letter logic
  for (i = 0; i < (word.length - 1); i++) {
    if (word[i] === word[1 + i]) {
      result = true
    } else {
      // do nothing
    }
  }

  // now evaluating whole word
  if (result === true) {
    return true
  } else {
    return false
  }
}

// test cases
console.log(doubleLetters("loop"))
console.log(doubleLetters("rune"))
console.log(doubleLetters("apple"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line


function wordCount(phrase) {

  // making sure we're dealing with a string
  if (typeof phrase === "string") {
    phrase = phrase.toLowerCase()
  } else {
    return "wordCount() requires a string parameter."
  }

  // clean up string by removing punctuation
  phrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

  // break up single string
  const wordArray = phrase.split(' ')
  // create array to count occurrences
  const countArray = {}

  // running through array and counting occurences
  for (let i = 0; i < wordArray.length; i++) {
    word = wordArray[i]
    if (countArray[word] === undefined) {
      countArray[word] = 1
    } else {
      countArray[word] += 1
    }
  }
  return countArray
}

//test cases
console.log(wordCount("olly olly in come free"))
console.log(wordCount("Baby shark, doo doo doo doo doo doo"))
console.log(wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
