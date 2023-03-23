const addComment = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector("#comment").value.trim();
    const postId = document.location.pathname.split('/').pop()
   
  
    if (comment) {
      
      const response = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ comment, postId }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {

        document.location.reload();

      } else {
        alert("Failed to add comment");
      }
    }
  };
  
  document
    .querySelector("#submitComment")
    .addEventListener("submit", addComment);