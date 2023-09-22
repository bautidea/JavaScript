// In this excercise im creating a blog post object with the properties:
// - title
// - body
// - author
// - views
// - comments --> These comments should have the next properties also:
//   - author
//   - body
// - isLive
// Ill create this object using Object Literal Syntax.

const blogPost = {
  title: 'Post title',
  body: 'Post body',
  author: 'Name of the author',
  views: 8520,
  comments: [
    {
      author: 'Comment1 author',
      body: 'Comment1 body',
    },
    {
      author: 'Comment2 author',
      body: 'Comment2 body',
    },
  ],
  isLive: true,
};

console.log(blogPost);
