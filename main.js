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
