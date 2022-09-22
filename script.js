fetch("https://api.kanye.rest")
    .then((response) => {
        // add a condition to check if the response is okay
        if(response.ok){
            return response.json();
        } else {
            // display if there's no response
            throw new Error("NETWORK RESPONSE ERROR")
        }
    })
    // display the JSON response
    .then(data => {
        console.log(data);
        // display our data into a function
        displayTweet(data)
    })
    //display any error encountered while getting the JSON data
    .catch((error) => console.error("FETCH ERROR:", error));

    function displayTweet(data){
        //declare a variable tweet to store the quote.
        // we use the dot notation to access the quote
        const tweet = data.quote;
        // we access the div with an ID root
        const tweetDiv = document.getElementById("root");
        // we create a p element inside the div 
        const text = document.createElement("p");
        // we make the paragraph created above a child element of the root div
        tweetDiv.appendChild(text);
        // we store the quote contents in the paragraph
        text.innerHTML = tweet;
        // style the body
        tweetDiv.style.backgroundColor = "#0077b6";
        tweetDiv.style.height = "100px";
        tweetDiv.style.width = "100%";
        tweetDiv.style.alignContent = "centre";
        tweetDiv.style.marginTop = "10%";
        text.style.color = "white";
        text.style.textAlign = "center";
        text.style.position = "absolute";
        text.style.marginLeft = "20px";
        text.style.fontSize = "30px";
        text.style.marginLeft = "10%";
        text.style.marginRight = "10%";

    }
 