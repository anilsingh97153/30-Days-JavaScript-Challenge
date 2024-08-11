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
  const profilePage = document.querySelector("#profilePage");
  const editProfileButton = document.querySelector("#editProfileButton");
  const profileUsername = document.querySelector("#profileUsername");
  const profileName = document.querySelector("#profileName");
  const profilePic = document.querySelector("#profilePic");
  const editUsername = document.querySelector("#editUsername");
  const editName = document.querySelector("#editName");
  const editProfilePic = document.querySelector("#editProfilePic");
  const profileForm = document.querySelector("#profileForm");
  const cancelEditProfileButton = document.querySelector("#cancelEditProfileButton");
  const sidebar = document.querySelector("#sidebar");
  const notifications = document.querySelector("#notifications");

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
    sidebar.style.display = "block";

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
      displayPosts();
    }
  });

  // Display posts
  function displayPosts() {
    postList.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
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
      postElement.querySelector(".likeButton").addEventListener("click", function () {
        post.likes++;
        localStorage.setItem("posts", JSON.stringify(posts));
        displayPosts();
        addNotification(`Your post received a like`);
      });
      postElement.querySelector(".commentButton").addEventListener("click", function () {
        const comment = prompt("Enter your comment:");
        if (comment) {
          post.comments.push(comment);
          localStorage.setItem("posts", JSON.stringify(posts));
          displayPosts();
          addNotification(`Your post received a comment`);
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
    sidebar.style.display = "none";
    postFormContainer.style.display = "none";
    postContainer.style.display = "none";
    profilePage.style.display = "none";
  });

  // Handle profile editing
  editProfileButton.addEventListener("click", function () {
    profilePage.style.display = "block";
    dashboardContainer.style.display = "none";
    postFormContainer.style.display = "none";
    postContainer.style.display = "none";
    sidebar.style.display = "none";

    const currentUsername = sessionStorage.getItem("loggedInUser");
    editUsername.value = currentUsername;
    editName.value = profileName.innerText;
  });

  profileForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newUsername = editUsername.value;
    const newName = editName.value;
    const newProfilePic = editProfilePic.files[0];

    sessionStorage.setItem("loggedInUser", newUsername);
    profileUsername.innerText = newUsername;
    profileName.innerText = newName;

    if (newProfilePic) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePic.src = e.target.result;
        localStorage.setItem("profilePic", e.target.result); // Save to local storage
      };
      reader.readAsDataURL(newProfilePic);
    }

    profilePage.style.display = "none";
    dashboardContainer.style.display = "block";
    postFormContainer.style.display = "block";
    postContainer.style.display = "block";
    sidebar.style.display = "block";

    addNotification(`Your profile has been updated`);
  });

  cancelEditProfileButton.addEventListener("click", function () {
    profilePage.style.display = "none";
    dashboardContainer.style.display = "block";
    postFormContainer.style.display = "block";
    postContainer.style.display = "block";
    sidebar.style.display = "block";
  });

  // Handle notifications
  function addNotification(message) {
    const notification = document.createElement("div");
    notification.innerText = message;
    notification.className = "notification";
    notifications.appendChild(notification);
  }

  function displayNotifications() {
    notifications.innerHTML = "";
    // This could be populated with notifications from a server or database
  }

  // Load saved profile picture if it exists
  const savedProfilePic = localStorage.getItem("profilePic");
  if (savedProfilePic) {
    profilePic.src = savedProfilePic;
  }

  // Check if user is already logged in
  if (sessionStorage.getItem("loggedInUser")) {
    loginFormContainer.style.display = "none";
    dashboardContainer.style.display = "block";
    sidebar.style.display = "block";
    userDisplayName.innerText = sessionStorage.getItem("loggedInUser");
    displayPosts();
  }
});
