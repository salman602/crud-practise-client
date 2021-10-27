import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProducts from './components/ManageProducts/ManageProducts';
import Header from './components/Header/Header';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route exact path="/products">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/products/add">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/products/update/:id">
            <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
