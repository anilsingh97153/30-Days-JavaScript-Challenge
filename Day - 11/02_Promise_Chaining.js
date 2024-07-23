// Activity - 2: Chaining promises

// Create a sequence of promises that simulates fetching data from a server. Chain the promises to log messages in a specific order.

// Simulation of data fetching using a sequence of promises

// Step 1: Create a promise to simulate fetching user data from a server
let fetchUserDataPromise = new Promise((resolve, reject) => {
    // Simulate a 2-second delay for fetching data
    setTimeout(() => {
        // Sample user data
        const userData = {id: 1, name: "Anil"};
        // Resolve the promise with the fetched data
        resolve(userData);
    }, 2000);
});

// Step 2: Function that processes user data, returning a promise
let processUserData = (userData) => new Promise((resolve, reject) => {
    // Simulate a 2-second delay for processing data
    setTimeout(() => {
        // Process the user data (e.g., add a 'processed' property)
        const processedData = { ...userData, processed: true };
        // Resolve the promise with the processed data
        resolve(processedData);
    }, 2000);
});

// Step 3: Function that saves processed data, returning a promise
let saveProcessedData = (processedData) => new Promise((resolve, reject) => {
    // Simulate a 2-second delay for saving data
    setTimeout(() => {
        // Save the processed data (e.g., add a 'saved' property)
        const savedData = { ...processedData, saved: true };
        // Resolve the promise with the saved data
        resolve(savedData);
    }, 2000);
});

// Step 4: Chain the promises to perform the sequence of operations
fetchUserDataPromise
    .then(userData => {
        // Log the fetched user data
        console.log("Fetched user data: ", userData);
        // Return the promise from processUserData with fetched data
        return processUserData(userData);
    })
    .then(processedData => {
        // Log the processed user data
        console.log("Processed user data: ", processedData);
        // Return the promise from saveProcessedData with processed data
        return saveProcessedData(processedData);
    })
    .then(savedData => {
        // Log the saved user data
        console.log("Saved user data: ", savedData);
        // Return a final message
        return "All the steps are completed.";
    })
    .then(message => {
        // Log the final message
        console.log(message);
    })
    .finally(() => {
        // Log the completion message, runs whether the promises succeeded or failed
        console.log("Process is completed.");
    })
    .catch(error => {
        // Log any errors that occurred during the promise chain
        console.error("Error:", error);
    });


