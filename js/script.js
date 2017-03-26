// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
message: '';
let red;
let blue;
let orange;
let viewedQuotes = [];


//Array to hold quotes, sources, citaitons & years
let quotes = [
      {
        quote: 'Dont cry because its over, smile because it happened.',
        source: 'Dr. Seuss',
        citation: 'Popular Quotes',

      },
      {
        quote: 'Be yourself; everyone else is already taken.',
        source: 'Oscar Wilde',
        citation: 'Popular Quotes',

      },
      {
        quote: 'A room without books is like a body without a soul.',
        source: 'Marcus Tullius Cicero',
        citation: 'Popular Quotes',

      },
      {
        quote: 'You only live once, but if you do it right, once is enough.',
        source: 'Mae West',
        citation: 'Popular Quotes',

      },
      {
        quote: 'Be the change that you wish to see in the world.',
        source: 'Mahatma Gandhi',
        citation: 'Popular Quotes'

      },

];


// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const splicedQuote = quotes.splice(randomNum, 1)[0];
    viewedQuotes.push(splicedQuote);
    if ( quotes.length === 0 ) {
      quotes = viewedQuotes;
      viewedQuotes = [];
    }
    return splicedQuote;

  }

function print(quote) {
  const quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = quote;

}

function randomColorGenerator() {
  let randomColor;
  red = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  orange = Math.floor(Math.random() * 256);
  randomColor = 'rgb(' + red + ',' + blue + ',' + orange + ')';
  return randomColor;
}


const intervalID = window.setInterval(printQuote, 15000);
function resetQuote() {
  intervalID;
}

function printQuote() {
  // On click event, function printQuote runs, then fires the getRandomQuote function
  let quotes = getRandomQuote();
  message = '<p class="quote">' + quotes.quote + '</p>';
  message += '<p class="source">' + quotes.source;
   if (quotes.citation) {
     message += '<span class="citation">' + quotes.citation + '</span>';
   } else if (quotes.year) {
     message += '<span class="year">' + quotes.year + '</span>';
   } else {
     message += '';
   }
   print(message);
   //Generate random color
   randomColorGenerator();
   //Update background with new random color
   document.getElementById('bckColor').style.backgroundColor = randomColorGenerator();

}
