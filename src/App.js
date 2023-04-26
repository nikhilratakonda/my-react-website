import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import BlogPage from './Blogpage';
// import Home from "./components/Home/Home" 
// import About from "./components/About/About" 


function App() {
  return (
   <div>
     <Router>
      <Layout>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog-site' element={<BlogPage />} />
        </Routes>
      </Layout>
   </Router>
   </div>
  );
}

export default App;