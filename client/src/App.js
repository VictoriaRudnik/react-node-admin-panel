import React from "react";
import "./App.css";
import LoginPage from "./components/pages/login";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import YourBrands from "./components/pages/brandList/YourBrands";
import AddBrand from "./components/pages/editBrand/AddBrand";
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} /> 
        <Route path="/your_brands" component={YourBrands} />
        <Route path="/add_brand" component={AddBrand} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
