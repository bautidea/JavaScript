//  In this excercise im going to create a blog object like ex4,
// but im going to create it using a constructor function.
// One thing to have in mind is that the user is drafting a post but have
// not published it yet.
let postTitle = 'Post title';
let postBody = 'Post body';
let postAuthor = 'Name of the author';
let postViews = 8520;
// First they have to sign in so.
let authorState = true;

function ConstructBlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0; // Initializing to 0 because when posted blog doesnt have views.
  this.comments = []; // Same with comments.
  this.isLive = authorState; // And with live im using a global variable.
}

function updateBody(post, newBody) {
  post['body'] = newBody;
}

function commentPost(post, commentAuthor, commentBody) {
  post['comments'].push({
    author: commentAuthor,
    body: commentBody,
  });
}

function viewPost(post) {
  post['views'] += 1;
}

function updateState(post) {
  post['isLive'] = authorState;
}

// ! Now lets imagine that someone is going to post a blog.
// * This have no practical use, it just to test functions.

//  Now this would be a draft, assigning variable as 'let' so i can write over it.
let post1 = new ConstructBlogPost(
  postTitle,
  postBody,
  postAuthor,
  postViews,
  isPosterLive
);
console.log(post1);

//  Author loging off.
authorState = false;
updateState(post1);
console.log(post1);

// Views increasing.
viewPost(post1);
viewPost(post1);
viewPost(post1);

//  Lets add comments.
let commentAuthor1 = 'Comment1 author';
let commentBody1 = 'Comment1 body';

let comment1 = commentPost(post1, commentAuthor1, commentBody1);
console.log(post1);

// Imagine theres a new body.
// Logging on first
authorState = true;
updateState(post1);

// Editing post.
postBody = 'New post Body';
updateBody(post1, postBody);
console.log(post1);

viewPost(post1);

// New comment
let commentAuthor2 = 'Comment2 author';
let commentBody2 = 'Comment2 body';

let comment2 = commentPost(post1, commentAuthor2, commentBody2);
console.log(post1);

//  Lets edit the post again.
postBody = 'Edit3 on post';
post1.body = postBody;

// Logging off.
authorState = false;
updateState(post1);
console.log(post1);
