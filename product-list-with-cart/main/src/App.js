import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <h1 className="title">Desserts</h1>
          <div className="items-list">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
        <div className="cart">
          <div className="cart-title">Your cart (0)</div>
          <div className="no-item">
            {/* <img src="" alt="" /> */}
            <div className="text">Your added items will appear here</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
