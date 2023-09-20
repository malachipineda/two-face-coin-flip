# My Awesome Project
Can't decide if you should order Pizza or Chinese? Let Two-Face decide for you at the flip of a coin. Enter your guess of heads or tails, then click "Flip Coin". The server will randomly decide to "land" on heads or tails.

**Link to project:** https://tan-impossible-parrot.cyclic.app/

[![Two-Face flipping coin gif](https://i.gyazo.com/e269098c66c3727255eba04aa7d7c7ae.gif)](https://gyazo.com/e269098c66c3727255eba04aa7d7c7ae)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node, Express, Figlet

Using an Express server, my coin flip API listens for a user input. My API will pick a random number between 1 and 2 for "Heads" and "Tails" respectively. Once the server has determined a number, it will respond with a JSON object. Properties of this object are then displayed to the User to let them know the result of the "coin flip".

Figlet was used to create more interesting error pages such as: https://tan-impossible-parrot.cyclic.app/error

## Optimizations

Need to crop and resize the coin images. Need to fix the delay that sometimes happens between coin image being displayed and result text. Should also hide the console log which shows the result before it is actually displayed in the DOM. Need to add user input options for what they are trying to decide between when landing on Heads or Tails. Need to fix what happens when something other than 'heads' or 'tails' is entered in the input.

## Lessons Learned:

Learned how to build an API which takes in a user input and then randomizes a number in the server before responding to the user with the result of the randomization.
