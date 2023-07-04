/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

Example usage:

node timer1.js 10 3 5 15 9 
This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
System Sound (Beep / Ding)
A quick Google Search of "node system beep" shows that in order to make our machine perform a system sound, we can simply output the following special character to stdout.

process.stdout.write('\x07');
Warning
Remember, it's always good to validate something like this. Run the above command in the node REPL to make sure the sound is working. Since the host operating system performs the beep, it will sound different based on the OS that we're on. We're happy so long as we get a sound. If it's not working, we can switch to sending a visible character like "." to stdout.

Edge Cases
With every software project, developers need to think about edge cases.

Instruction
Confirm that our script can handle some common edge cases.

For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/ 

//Haves
//input is a number or array of number
//user send input from the CL
//user gets a sound after every item in the array or the number
//to make a system sound --- process.stdout.write('\x07')

//implementation
//require args from procees
//create a variable to hold args
const args = process.argv.slice(2);


  const timer = (numbers) => {
    if (args.length === 0) {
      console.log("empty cells don't have any sound");
    }
    else {
    
    let index = 0;
    let newNum = numbers.sort((a,b)=>{a-b});

    for (let item of newNum) {
      if (!isNaN(item) && item > 0) {
        setTimeout(() => {
          process.stdout.write(`${'\x07'} i will sound in the next ${item} seconds`);
          console.log('----------------------')
        }, index);
        index += item * 1000;
      } else {
        console.log(`"${item}" is not a valid number or is less than 0`);
      }
    }
  }
};
timer(args);

//set a delay according to the input or inputs
// output the sound

