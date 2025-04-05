// question ...
//  write a javascript program to generate  a random number and store it in a variable . the program then 
// takes an input from the user to tell them whether the guess was correct ,greter or lesser than the original number ..
// 100-(no of guesses) is the score of the user the program is expected to terminate once the number is guessed. number should be between 1 to 100


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIntInclusive = randomNumber(1, 100);
//   console.log(randomIntInclusive); 



let guess_time = 1;
while (guess_time < 100) {
    let user_input = prompt("Enter a number : ")
    user_input = Number.parseInt(user_input)
    console.log(user_input)
    if (user_input > randomIntInclusive)
        console.log(`Enter a number Smaller than ${user_input} `)

    else if (user_input < randomIntInclusive)
        console.log(`Enter a number Greater than ${user_input} `)

    console.log(`          ${100 - guess_time} Chances left..`)

    guess_time++;

    if (user_input == randomIntInclusive) {
        console.log(`Congratulations you won the Game!`)
        console.log(` Game over! The  number was :  ${randomIntInclusive}`)
        break;
    }



}

console.log(`Score :  ${guess_time}`)






