// stack (primitive), Heap (Non-primitive)

let myYoutubename = "anushreedotcom"

let anothername = myYoutubename
anothername = "mewithmycode"

console.log(myYoutubename);
console.log(anothername);

let userone = {
email: "user@anu.com",
upi: "user@apl"
}

let usertwo = userone

usertwo.email = "useranu@123.com",

console.log(userone.email);
console.log(usertwo.email);