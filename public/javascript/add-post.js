async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const post_content = document.querySelector("#post_content").value.trim;

  const response = await fetch("/api/posts", {
    method: "POST",
    headers: JSON.stringify({
      "Content-Type": "application/json",
      title,
      post_content,
    }),
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("OOPS! Something went wrong");
  }
}

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
