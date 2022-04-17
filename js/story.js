// 1. Declare variables and capture input.
const adjective1 = prompt('Please type an adjective.');
const noun1 = prompt("Please type a noun.");
const adjective2 = prompt('Please type an adjective.');
const noun2 = prompt("Please type a noun.");
const adjective3 = prompt('Please type an adjective.');
const noun3 = prompt("Please type a noun.");



// 2. Combine the input with other words to create a story.
const sentence = `<p>There once was a ${adjective1} programmer who wanted to use JavaScript to make a video-game.He was a very ${noun1} person who works day and night. Whenever he is faced with a challenge, he speaks to ${adjective2} who was his ${noun2}. After months of studying, he became the ${adjective3} in class and everyone loved ${noun3} </p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('p').innerHTML = sentence;