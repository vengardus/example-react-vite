import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-col bg-gray-300">

      <Navbar className="bg-gray-800" />

      <main className="bg-gray-300 py-auto py-3 px-4">
        {children}
      </main>

      <Footer />
    </div>
  )
}