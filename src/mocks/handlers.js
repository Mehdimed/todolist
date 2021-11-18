import { rest } from 'msw'

export const handlers = [
  rest.post('/tryLogin', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),
  rest.get('/logout', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.removeItem('is-authenticated')
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),
  rest.get('/myTasks', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        }),
      )
    }
    // If authenticated, return a mocked user details
    const date1 = new Date('June 17, 2021 03:24:00');
    const date2 = new Date('January 24, 2021 08:25:00');
    const date3 = new Date('February 9, 2021 17:53:00');
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
        password: 'admin',
        tasks: [
            {
                title: 'Faire une app React',
                date: date1.toLocaleString(),
                isChecked: false
            },
            {
                title: '100 tractions',
                date: date2.toLocaleString(),
                isChecked: false
            },
            {
                title: 'Dej avec babes',
                date: date3.toLocaleString(),
                isChecked: false
            }
        ]
      }),
    )
  }),
]