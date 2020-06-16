const { resolveAPIResponse } = require('./api')

test('[API]: resolve to response data', () => {
  const response = { data: 'hello' }
  expect(resolveAPIResponse(response)).toBe(response.data)
})