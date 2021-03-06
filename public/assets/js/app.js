document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/burgers', {
    burger_name: document.getElementById('burger_name').value,
    devoured: false
  })
    .then(() => location.reload())
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('devour')) {
    axios.put(`/api/burgers/${event.target.dataset.id}`, { devoured: true })
      .then(() => location.reload())
      .catch(err => console.error(err))
  }
})