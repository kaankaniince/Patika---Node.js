const posts = [
  { id: 1, title: "First Post", content: "This is the first post." },
  { id: 2, title: "Second Post", content: "This is the second post." },
  { id: 3, title: "Third Post", content: "This is the third post." },
];

function listPosts() {
  console.log("\nListing all posts:");
  posts.forEach((post) => {
    console.log(`ID: ${post.id}, Title: ${post.title}`);
  });
}

function addPost(newPost) {
  return new Promise((resolve, reject) => {
    if (newPost && newPost.title && newPost.content) {
      posts.push(newPost);
      resolve("New post added successfully!");
    } else {
      reject("Invalid post data! Please provide title and content.");
    }
  });
}

(async function main() {
  try {
    listPosts();

    const newPost = {
      id: 4,
      title: "Fourth Post",
      content: "This is the fourth post.",
    };
    const message = await addPost(newPost);
    console.log(`\n${message}`);

    listPosts();
  } catch (error) {
    console.error(error);
  }
})();
