
let currentp = "vidhi123";
let storedp = "vidhi123";

if (currentp == storedp) {
    let newp = "vidhi12";
    if (newp.length >= 8) {
        storedp = newp; 
        console.log("Password changed successfully!");
    } 
} else {
    console.log("Error: Incorrect current password.");
}
