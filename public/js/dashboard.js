const createPost = async (event) => {
    event.preventDefault();
  
    const postTitle = document.querySelector("#title").value.trim();
    const postContent = document.querySelector("#content").value.trim();
    const postId = document.location.pathname.split('/').pop()
   
  
    if (postTitle && postContent) {
      
      const response = await fetch("/api/dashboard", {
        method: "POST",
        body: JSON.stringify({ postTitle, postContent }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {

        document.location.replace("/dashboard");

      } else {
        alert("Failed to add post");
      }
    }
  };
  
  document
    .querySelector("#newPost")
    .addEventListener("submit", createPost);