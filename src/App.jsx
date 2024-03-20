import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  HomeLayout,
  Landing,
  Wallets,
  Recovery,
  Error,
  SinglePageError,
} from './Pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const queryClient = new QueryClient()
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <SinglePageError />,
        },

        {
          path: 'wallet',
          element: <Wallets />,
          errorElement: <SinglePageError />,
        },
        {
          path: 'recovery',
          element: <Recovery />,
        },
      ],
    },
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
export default App
