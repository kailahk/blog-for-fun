import './App.css';
import Navbar from './Navbar';

export default function App() {
  const title = 'Blog for Fun'
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Welcome to <span className="title">{title}!</span></h1>
        <h6>Your lucky number is: {Math.floor(Math.random() * (100 - 1 + 1) + 1)}</h6>
      </div>
    </div>
  );
}
