// Using Async / Await

// Write an async function that waits for a promise to resolve / reject and then logs the resolved data

function fetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise reolved.");
            // reject("Error occured.");
        }, 2000);
    })
}

async function fetchData() {
    try {
        let data = await fetch();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();