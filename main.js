const baseURL = "http://localhost:3000/blogs"

document.addEventListener("DOMContentLoaded", event => {
  console.log("yo dog")
  axios.get(`${baseURL}`).then(result => {
    const blogs = result.data.blogs
    blogs.forEach(blog => {
      $("#sidebar").append(
        `<ul class="list-group">
          <a href="#/blogs/${blog.id}"
            class="list-group-item list-group-item-action">
              ${blog.title}
          </a>
        </ul>`
      )
    })
  })
})

let newBlogForm = document.getElementById("create-post")
newBlogForm.addEventListener("click", event => {
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
      <button type="submit" class="btn btn-info btn-large">Create New Post</button>
    </form>`
  )
})
