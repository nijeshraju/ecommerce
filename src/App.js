import './App.css';
import { ROUTER } from "./router/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {ROUTER.map((route, index) => {
            return <Route  key={index} exact path={route.url} element={<route.component />}></Route>
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
