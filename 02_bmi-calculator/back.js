const form = document.querySelector('form');

form.addEventListener("submit" , (event) => {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')
    const range = document.querySelector('#range')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Enter a valid height...`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Enter a valid weight...`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1)

        results.innerHTML = `<span>Your BMI is ${bmi}</span>`
        if (bmi < 18.6) {
            range.innerHTML = `<span>You are Underweight</span>`
        } else if (bmi >= 18.6 && bmi < 30) {
            range.innerHTML = `<span>You are in Normal range</span>`
        } else {
            range.innerHTML = `<span>You are Overweight</span>`
        }
    }
})