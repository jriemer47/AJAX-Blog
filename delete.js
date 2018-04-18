deleteBlog = id => {
  axios.delete(`${baseURL}/${id}`).then(result => {
    location.reload()
  })
}
