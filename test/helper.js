/**
 * Setup fixtures.
 *
 * @param {String} fixture Fixture file to load (defaults to default.html).
 */
export function setup(fixture) {
  const content = document.createElement('div')

  content.id = 'root'

  switch (fixture) {
    case 'multiple.html':
      content.innerHTML = require('./fixtures/multiple.html')
      break

    default:
      content.innerHTML = require('./fixtures/default.html')
  }

  document.body.appendChild(content)
}

/**
 * Tear down fixtures.
 */
export function teardown() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild)
  }
}

const helper = {
  setup,
  teardown,
}

export default helper