import { useParams } from 'react-router-dom'
import { Layout } from '../components/ui/Layout'
import { LaunchDetail } from '../components/launches/LaunchDetail'

export const LaunchDetailPage = () => {
  // Obtiene el parámetro enviado por el route
  const { id } = useParams()
  return (
    <Layout>
      <LaunchDetail id={id} />
    </Layout>
  )
}
