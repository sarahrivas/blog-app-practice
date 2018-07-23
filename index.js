const posts = [
  {
    "title": "Top Travel Destinations",
    "author": "world traveler",
    "date": new Date().toISOString().slice(0, 10),
    "body": "Looking for some adventure? Checkout these top destinatons. 1) Paris, France, 2) Capetown, South Africa, 3) Alberta, Canada, 4)Tokyo, Japan 5) Capri, Italy"
  },
  {
    "title": "Learning how to code",
    "author": "non-stop coder",
    "date": new Date().toISOString().slice(0, 10),
    "body": "Code all day long!"
  },
  {
    "title": "hi",
    "author": "hi",
    "date": new Date().toISOString().slice(0, 10),
    "body": "hi"
  }
];


const container = document.getElementById('container');

addEntry(posts);

function addEntry(posts) {
  for (let i = 0; i < posts.length; i++) {
    const postContainer = document.createElement('article');
    // title
    const heading = document.createElement('h1');
    heading.textContent = posts[i].title;
    postContainer.appendChild(heading);
    // author
    const author = document.createElement('p');
    author.textContent = `Author: ${posts[i].author}`;
    postContainer.appendChild(author);
    // date
    const date = document.createElement('p');
    date.textContent = `Date posted: ${posts[i].date}`;
    postContainer.appendChild(date);
    // body
    const body = document.createElement('p');
    body.textContent = posts[i].body;
    postContainer.appendChild(body);
    // comment box
    postContainer.appendChild(buildTextArea('Comment here'));
    //like counter
    const likeEl = liker();
    postContainer.appendChild(likeEl);
    // like button
    postContainer.appendChild(buttonMaker('❤️',() => {
      const likeSpan = likeEl.getElementsByTagName('span')[0]; //<span></span>
      const currentLikeNum = likeSpan.textContent; //'0'
      const newLikeNum = parseInt(currentLikeNum, 10) + 1; //0 + 1 = 1
      likeSpan.textContent = newLikeNum; //adds the like amount to the likeSpan text
    }));
    // append all to container
    container.appendChild(postContainer);
  }
}

function buildTextArea(labelText) {
  const labelEl = document.createElement('label');
  labelEl.textContent = labelText;
  const commentBox = document.createElement('textarea');
  labelEl.appendChild(commentBox);
  return labelEl;
}

function buttonMaker(buttonText, callback) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = buttonText;
  buttonEl.addEventListener('click', callback)
  return buttonEl;
}


function liker() {
  const likeCounter = document.createElement('div');
  likeCounter.textContent = 'Likes:';
  const likeAmount = document.createElement('span');
  likeAmount.textContent = '0';
  likeCounter.appendChild(likeAmount);
  return likeCounter;
}


function commentSubmission() {

}
