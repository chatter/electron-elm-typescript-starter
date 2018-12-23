import { Elm } from '../elm/Main'

document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div')
  document.body.prepend(div)
  Elm.Main.init({ node: div, flags: null })
})
