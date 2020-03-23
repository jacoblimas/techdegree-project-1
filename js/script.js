/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/



//getRandomQuote function to obtain random quote



//Array of objects with quote objects and data
var quotes = [
  {
  Quote: "Oh yes, the past can hurt. But you can either run from it, or learn from it. ",
  Source:"Rafiki",
  Citation: "The Lion King",
  Year: 1994 },
  {
    Quote: "To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel.",
    Source: "Walter Mitty",
    Citation: "The Secret Life of Walter Mitty",
    Year: 2013
  },
    {
      Quote: "If you can't love yourself how in the hell are you gonna love somebody else.",
      Source: "RuPaul",
      Year:2000
    },
    {
      Quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
      Source: "Emperor",
      Year: 1998
    },
    {
      Quote: "A wise man can learn more from his enemies than a fool from his friends.",
      Source: "Niki Lauda",
    },
    {
      Quote: "Make your life a masterpiece; imagine no limitations on what you can be, havr or do.",
      Source: "Brian Tracy",
    },
    {
      Quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
      Source: "Confucius"
    },
    {
      Quote: "Great men are not born great, they grow great.",
      Source: "Mario Puzo",
      Citation: "The Godfather."
    },
    {
      Quote: "Just because someone stumbles and loses their path, doesn't mean they're lost forever.",
      Source: "Professor X",
      Citation: "X-Men, Days of Future Past.",
      Year: 2014
    }

];

function getRandomQuote(array){
  //creates random quote from quotes array
    var quoteIndex = Math.floor(Math.random() * quotes.length);
    return array[quoteIndex];
};

function printQuote(){
  var result = getRandomQuote(quotes);
  var message = '';
  message +='<p class="quote">' + result.Quote + '</p>';
  message += '<p class="source">' + result.Source;
  //Prints optional properties in quotes array
  if ("Citation" in result){
    message += "<span class='citation'>" + result.Citation + "</span>";
  }
  if("Year" in result){
    message += "<span class='year'>" + result.Year + "</span>"
  }
    message += "</p>";

    document.getElementById('quote-box').innerHTML = message;

}
printQuote();



document.getElementById('load-quote').addEventListener("click", printQuote, false);
