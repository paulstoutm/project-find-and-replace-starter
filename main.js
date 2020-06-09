

let findInput = document.querySelector(".find-input")
let replaceInput = document.querySelector(".replace-input")
let replaceAllButton = document.querySelector(".replace-all-button")
let rowElements = document.querySelectorAll(".row")


function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")

}
replaceAllButton.addEventListener("click", function () {
    let userInput = findInput.value
    let replaceUserInput = replaceInput.value
    let numberFound = 0
    // console.log(replaceUserInput)
    for (let sc = 0; sc < rowElements.length; sc = sc + 1) {
        let currentRowElement = rowElements[sc]
        let currentRowElementCellElements = getCellElements(currentRowElement)

        for (let sc2 = 0; sc2 < currentRowElementCellElements.length; sc2 = sc2 + 1) {
            let currentCellElement = currentRowElementCellElements[sc2]
            let currentCellItems = currentCellElement.innerHTML


            if (currentCellItems.includes(userInput)) {
                // console.log("Found", currentCellItems)
                currentCellElement.innerHTML = currentCellItems.replace(userInput, replaceUserInput)
                numberFound = numberFound + 1
                console.log(numberFound)
                currentCellElement.style.color = "red"
            } else {

            }
        }
    }
})







// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
