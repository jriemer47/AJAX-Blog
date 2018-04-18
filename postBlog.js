postBlog = (title, content) => {
  if (!title || !content) {
    let error = document.querySelector("#errors")
    error.style = "block"
  } else {
    axios
      .post(`${baseURL}`, {
        title,
        content
      })
      .then(result => {
        location.reload()
      })
  }
}
