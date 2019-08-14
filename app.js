//List of default buttons
const topics = ["Cats", "Dogs", "Pizza", "Games"];

 // Function for displaying topic data
 function renderButtons() {

// Deleting the buttons prior to adding new topics
// (this is necessary otherwise you will have repeat buttons)
document.getElementById("buttons-view").innerHTML = "";

// Looping through the array of topics
for (let i = 0; i < topics.length; i++) {

  // Then dynamically generating buttons for each topic in the array
  const a = document.createElement("button");
  // Adding a class of topic to our button
  a.classList.add("topic");
  // Adding an Id
  a.setAttribute("Id", topics[i]);
  // Providing the initial button text
  a.innerHTML = topics[i];
  // Adding the button to the buttons-view div
  document.getElementById("buttons-view").append(a);
}
}

 // This function handles events where one button is clicked
 document.getElementById("add-topic").addEventListener("click", function (event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var topic = document.getElementById("topic-input").value.trim();

        // Adding the topic from the textbox to our array
        topics.push(topic);

        // Calling renderButtons which handles the processing of our topic array
        renderButtons();
      });

// Calling the renderButtons function to display the intial buttons
renderButtons();

//Create tag variable
var tag = "";
console.log(tag);

//Listeners for all buttons--------------------------------------------------------------
document.body.addEventListener('click', function (event) {
    if (event.target.id === event.target.innerHTML) {
        window.tag = event.target.id;
        console.log(tag);
        document.getElementById("tag").innerHTML = "Searching for " + tag + " gifs.";
    }
}, false);
                                       
    // Event listener for our search button
    document.getElementById("gif-button").addEventListener("click", function () {
          // Perfoming an AJAX GET request to our queryURL
          console.log(tag);      
          
 var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent); 

        // Storing giphy API URL for a random image
          const queryURL = "https://api.giphy.com/v1/gifs/random?api_key=n4F1rUinVKtj2qQqBO9VMlcK4gmPahhc&rating=pg&tag=" + tag +"&limit=10";
          //Create 10 images
          for (let i = 0; i < 10; i++) {
            fetch(queryURL)          
          // After the data from the fetch request comes back
            .then(function (response) {
            return response.json();
            })          
          // After the body is turned into json
            .then(function(responseJson) {
            console.log(responseJson);
          // Saving the image url properties
            const imageUrl = responseJson.data.fixed_height_small_still_url;
            const aniImageUrl = responseJson.data.fixed_height_small_url;
            console.log(imageUrl);
          // Creating and storing an image tag
            const gif = document.createElement("img");
            gif.id = "img";
          // Setting the gif attributes
            gif.setAttribute("src", imageUrl);
            gif.setAttribute("data-still", imageUrl);
            gif.setAttribute("data-animate", aniImageUrl);
            gif.setAttribute("class", "gif");
            gif.setAttribute("data-state", "still");
          // Prepending the gif
            document.getElementById("images").prepend(gif);
            //Append rating
            //
            
        });
    }});
    
    //animate gifs on click
    document.querySelectorAll(".gif").forEach(function (img) {
        img.addEventListener("click", function (event) {
          var state = event.target.getAttribute("data-state");
          if (state === "still") {
            event.target.setAttribute("src", event.target.getAttribute("data-animate"));
            event.target.setAttribute("data-state", "animate");
          } else {
            event.target.setAttribute("src", event.target.getAttribute("data-still"));
            event.target.setAttribute("data-state", "still");
          }
        });
      });

//----------------------------------------------------------------------------------------------------------------------------