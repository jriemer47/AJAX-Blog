setActive = () => {
  let listGroupItems = document.querySelectorAll(".list-group-item")
  listGroupItems.forEach((a, i) => {
    console.log(a, " aaaa")
    a.addEventListener("click", event => {
      console.log(event.target, "target")
      listGroupItems.forEach((a, i) => {
        a.classList.remove("active")
      })
      a.classList.add("active")
      renderRight()
    })
  })
}
