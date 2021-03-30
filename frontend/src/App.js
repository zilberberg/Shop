import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                  &#9776;
              </button>
              <Link to="/" >Shop</Link>
            </div>
            <div className="header-links">
                <a href="/cart">Cart</a>
            </div>
          </header>

          <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>
                    <li>
                        <a href="index.html">Shirts</a>
                    </li>
                </ul>
          </aside>

          <main className="main">
              <div className="content">
                <Route path="/" exact={true} component={HomeScreen}/>
                  
              </div>              
          </main>

          <footer className="footer">
                FOOTER
          </footer>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
