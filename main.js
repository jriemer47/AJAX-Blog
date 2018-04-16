const baseURL = "http://localhost:3000/blogs"

const getAllPosts = document.addEventListener("DOMContentLoaded", event => {
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
    $("#view").append(
      `<section>
      <header>
        <h2>${blogs[0].title}</h2>
        <hr>
      </header>
      <article><p>${blogs[0].content}</p></article>
      <aside class="my-4">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" id="edit-post" href="#/posts/131/edit">Edit</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" id="delete-post" href="#">Delete</a>
          </li>
        </ul>
      </aside>
    </section>`
    )
  })
})

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
      <button type="submit" class="btn btn-info btn-large">Create New Post</button>
    </form>`
  )
})
