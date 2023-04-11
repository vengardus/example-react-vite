import { UserProvider } from '../components/blog/UserContext'
import { Blog } from '../components/blog/Blog'
import { Layout } from '../components/ui/Layout'

export const BlogPage = () => {
  return (
    <UserProvider course='React'>
      <Layout>
        <Blog course='React' />
      </Layout>
    </UserProvider>
  )
}
