const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener("click", (event) => {
        if (event.target.id === 'indianRed') {
            document.documentElement.style.backgroundColor = '#C44D58';
        }

        if (event.target.id === 'firebrick') {
            document.documentElement.style.backgroundColor = '#B80036';
        }

        if (event.target.id === 'turquoise') {
            document.documentElement.style.backgroundColor = '#40F4E6';
        }

        if (event.target.id === 'indigo') {
            document.documentElement.style.backgroundColor = '#4A1D7E';
        }
    })
})

const reset = document.querySelector("#reset")

reset.addEventListener("click", (event) => {
    document.documentElement.style.backgroundColor = "white";
})