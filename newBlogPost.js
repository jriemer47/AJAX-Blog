const newBlogForm = document.getElementById("create-post")
newBlogForm.addEventListener("click", event => {
  $("#update-view").hide()
  $("#post-form").show()
  $("#postButton").click(() => {
    let title = document.getElementById("titlePost").value
    let content = document.getElementById("contentPost").value
    postBlog(title, content)
  })
})
