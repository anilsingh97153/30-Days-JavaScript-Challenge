document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#loginForm");
    const dashboardContainer = document.querySelector("#dashboardContainer");
    const loginFormContainer = document.querySelector("#loginFormContainer");
    const userDisplayName = document.querySelector("#userDisplayName");
    const postButton = document.querySelector("#postButton");
    const postList = document.querySelector("#postList");
    const logoutButton = document.querySelector("#logoutButton");
    const postFormContainer = document.querySelector("#postFormContainer");
    const postContainer = document.querySelector("#postContainer");
  
    // Handle login form submission
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Store username in session storage
      sessionStorage.setItem("loggedInUser", username);
  
      // Switch to dashboard
      loginFormContainer.style.display = "none";
      dashboardContainer.style.display = "block";
      userDisplayName.innerText = username;
      postFormContainer.style.display = "block";
      postContainer.style.display = "block";
  
      displayPosts();
    });
  
    // Handle creating a new post
    postButton.addEventListener("click", function () {
      const postContent = document.getElementById("postContent").value;
  
      if (postContent.trim()) {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        const newPost = {
          id: posts.length + 1,
          content: postContent,
          user: sessionStorage.getItem("loggedInUser"),
          likes: 0,
          comments: [],
        };
        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));
        displayPosts(); // Call displayPosts after storing the new post
      }
    });
  
    // Display posts
    function displayPosts() {
      console.log("Displaying posts..."); // Debugging log
      postList.innerHTML = '';
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      console.log(posts); // Debugging log to check the posts array
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
          <p><strong>${post.user}</strong></p>
          <p>${post.content}</p>
          <div class="postActions">
            <span class="likeButton">👍 ${post.likes}</span>
            <span class="commentButton">💬 Comment</span>
          </div>
          <div class="comments">
            ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
          </div>
        `;
        postElement.querySelector('.likeButton').addEventListener('click', function () {
          post.likes++;
          localStorage.setItem('posts', JSON.stringify(posts));
          displayPosts();
        });
        postElement.querySelector('.commentButton').addEventListener('click', function () {
          const comment = prompt('Enter your comment:');
          if (comment) {
            post.comments.push(comment);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
          }
        });
        postList.appendChild(postElement);
      });
    }
  
    // Handle logout
    logoutButton.addEventListener("click", function () {
      sessionStorage.removeItem("loggedInUser");
      loginFormContainer.style.display = "block";
      dashboardContainer.style.display = "none";
      postFormContainer.style.display = "none";
    });
  
    // Check if user is already logged in
    if (sessionStorage.getItem("loggedInUser")) {
      loginFormContainer.style.display = "none";
      dashboardContainer.style.display = "block";
      userDisplayName.innerText = sessionStorage.getItem("loggedInUser");
      displayPosts();
    }
  });
  