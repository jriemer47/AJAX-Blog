const newBlogForm = document.getElementById("create-post")
newBlogForm.addEventListener("click", event => {
  $("section").remove()
  $("#view").append(
    `<form id="post-form" action="/posts/">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" value="">
      </div>
      <div class="form-group">
        <label for="title">Content</label>
        <textarea type="text" rows="6" class="form-control" id="content"></textarea>
      </div>
      <button onclick="submitPost()" type="submit" class="btn btn-info btn-large">Create New Post</button>
    </form>`
  )
})
