renderRight = () => {
  axios.get(`${baseURL}`).then(result => {
    let listItem = document.querySelectorAll(".list-group-item")
    listItem.forEach((a, idx) => {
      if (a.classList.contains("active")) {
        $("#edit-form").hide()
        $("#update-view").show()
        $("#title").html(result.data.blogs[idx].title)
        $("#content").html(result.data.blogs[idx].content)

        let id = result.data.blogs[idx].id
        $("#edit-post").click(() => {
          $("#edit-form").show()
          $("#update-view").hide()

          $("#titleEdit").val(result.data.blogs[idx].title)
          $("#contentEdit").html(result.data.blogs[idx].content)

          console.log("editin")
          editBlog(id)
        })

        $("#delete-post").click(() => {
          deleteBlog(id)
        })
      }
    })
  })
}
