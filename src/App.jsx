import Navbar from './Navbar';
import Home from './Home';

export default function App() {
  const title = 'Blog for Fun'
  return (
    <div className="App">
      <Navbar title={title}/>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
