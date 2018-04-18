editBlog = id => {
  $("#editButton").click(event => {
    console.log("lcickingingign")
    console.log("what is this = ", id)

    const title = $("#titleEdit").val()
    const content = $("#contentEdit").html()

    console.log(title)
    console.log(content)

    // console.log("what is this event nonsense   ", event.target.parentNode)

    axios
      .put(`${baseURL}/${id}`, {
        title,
        content
      })
      .then(result => {
        console.log(result, "  from editing reposnse")
        location.reload()
      })
  })
}
