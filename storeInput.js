let button = document.querySelector("button");

button.addEventListener("click", function() {
    let text;
    let number;
    let email;
    let date;
    
    // 1. Update the four variables - text, number, email, and date.
    //  - Save the value of the four different inputs.
    //  - Go to the html to use the class names.
    

    
    
    


    // DO NOT CHANGE THIS CODE
    let resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = "";
    resultsDiv.innerHTML += `<p>Text: ${text}</p>`;
    resultsDiv.innerHTML += `<p>Number: ${number}</p>`;
    resultsDiv.innerHTML += `<p>Email: ${email}</p>`;
    resultsDiv.innerHTML += `<p>Date: ${date}</p>`;

});
