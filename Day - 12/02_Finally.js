// Write a script that includes a try-catch block and a finally block. Log the message in the try, catch, and finally blocks to observe the excecution flow.

try {
  console.log("Inside try.");
  throw new Error("Demo error.");
} catch (error) {
  console.log("Inside catch.");
  console.log("An error occurred:", error.message);
} finally {
  console.log("Inside finally.");
}
