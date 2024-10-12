import { RouterProvider } from 'react-router-dom'
import '@scss/main.scss'
import { routers } from './routes'
import { useLanguage } from '@hooks/useCurrentLanguage'
import { useMode } from '@hooks/useMode'
import { usePrimary } from '@hooks/usePrimaryColor'
import { LoadingSection } from '@components/section'

function App() {
  useLanguage()
  useMode()
  usePrimary()

  return <RouterProvider router={routers} fallbackElement={<LoadingSection />} />
}

export default App
