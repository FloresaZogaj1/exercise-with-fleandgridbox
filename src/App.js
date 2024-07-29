import React from 'react';
import './App.css';
import image2 from './assets/images.jpg';

function App() {
  return (
    <div className="container">
      <header className="header">Header</header>
      <main className="main-content">
        <div className="card">
          <img src={image2} alt="Sample" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Card Title 1</h2>
            <p className="card-text">This is some description text for the first card.</p>
          </div>
        </div>
        <div className="card">
          <img src={image2} alt="Sample" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Card Title 2</h2>
            <p className="card-text">This is some description text for the second card.</p>
          </div>
        </div>
        <div className="card">
          <img src={image2} alt="Sample" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Card Title 3</h2>
            <p className="card-text">This is some description text for the third card.</p>
          </div>
        </div>
        <div className="card">
          <img src={image2} alt="Sample" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Card Title 4</h2>
            <p className="card-text">This is some description text for the fourth card.</p>
          </div>
        </div>
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
