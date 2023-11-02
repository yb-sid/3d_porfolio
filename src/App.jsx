
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  About, Contact, Experience, Feedbacks,
  Hero, Navbar, Works, Tech, StarsCanvas, Blogs
} from "./components"

import { ApolloProvider } from "@apollo/client"
import client from "./apollo/apolloConfig"


const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />

      <div className="relative z-0">
        <Tech />
        <StarsCanvas />
      </div>

      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>

  )
}
const App = () => {

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
