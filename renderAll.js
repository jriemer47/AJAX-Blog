renderAll = posts => {
  $("#post-form").hide()
  $("#edit-form").hide()
  axios.get(`${baseURL}`).then(result => {
    let blogs = result.data.blogs
    blogs.forEach((blog, i) => {
      if (i === 0) {
        $("#blog-view").append(
          `<ul class="list-group">
          <a id="list-item" href="#/blogs/${blog.id}"
          class="list-group-item list-group-item-action active">
          ${blog.title}
          </a>
          </ul>`
        )
      } else {
        $("#blog-view").append(
          `<ul class="list-group">
          <a id="list-item" href="#/blogs/${blog.id}"
          class="list-group-item list-group-item-action">
          ${blog.title}
          </a>
          </ul>`
        )
      }
    })
    setActive()
  })
}
// let listGroupItems = document.querySelectorAll(".list-group-item")
// listGroupItems.forEach((a, i) => {
//   a.addEventListener("click", event => {
//     listGroupItems.forEach((a, i) => {
//       a.classList.remove("active")
//     })
//     a.classList.add("active")
//     renderRight()
//   })
// })
