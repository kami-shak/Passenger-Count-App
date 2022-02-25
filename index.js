//document.getElementById("count-el").innerText = 5;

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count.

// let countEl = document.getElementById("count-el") //pass in arguements.
// let count = 0 ;

// // increment function
// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
// }

// // save function
// function save() {
//     console.log(count);
// }

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let result = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += result
    // NB: Make sure to not delete the existing content of the paragraph
    count = 0 
    countEl.textContent = count
    //console.log(count)
}
