import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { Routes, Route } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

export default function App() {
  const title = 'Blog for Fun'
  return (
      <div className="App">
        <Navbar title={title} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
  );
}
