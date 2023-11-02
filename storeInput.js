let button = document.querySelector("button");

button.addEventListener("click", function() {
    let text = document.querySelector('.text').value;
    
    // 1. Save the value of the remaining three inputs in three separate variables.
    //  - Use the text variable as a guide.
    //  - You should have a variable for the number, email, and date.
    


    // DO NOT CHANGE THIS CODE
    let resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = "";
    resultsDiv.innerHTML += `<p>Text: ${text}</p>`;
    
    
    // 2. Update the results div innerhtml to the remaining three inputs.
    //  - Use the line of code above as a guide.
    //  - Take note that string interpolation is used.
    //  - Use the " += " assignment.
    //. - The " += " lets you add to what's already there - similar to appending.
    


});