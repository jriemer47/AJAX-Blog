document.addEventListener("DOMContentLoaded", event => {
  console.log("yo dog")
})

document.getElementById("create-post").addEventListener("click", function() {
  console.log("append is this working")
  $("#view").append(`<form id="post-form" action="/posts/">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" value="">
    </div>
    <div class="form-group">
      <label for="title">Content</label>
      <textarea type="text" rows="6" class="form-control" id="content"></textarea>
    </div>
    <button type="submit" class="btn btn-info btn-large">Create New Post</button>
  </form>`)
})
