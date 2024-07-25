import axios from "axios";

axios.get("https://api.github.com/users/anilsingh97153")
.then(response => response.data)
.then(data => console.log("Name:", data.name,"\n","Followers:", data.followers))
.catch(error => console.log(error.message))

// in axios you don't need to write response.json() which means no need to parse json to object, because axios does that, instead simply return the data object out of response