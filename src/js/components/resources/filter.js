export const useResourcesFilter = () => {
  const buttons = document.querySelectorAll('[data-reports-filter]')
  const articles = document.querySelectorAll('[data-category]')

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.reportsFilter

      buttons.forEach((btn) => btn.classList.remove('is-active'))
      btn.classList.add('is-active')

      articles.forEach((article) => {
        const categories = article.dataset.category.split(' ')

        if (categories.includes(filter)) {
          article.classList.remove('hidden')
        } else {
          article.classList.add('hidden')
        }
      })
    })
  })
}
