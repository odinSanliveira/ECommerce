import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import NoPageFound from './screens/NoPageFound'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
// import OrderScreen from './screens/OrderScreen'
// import UserListScreen from './screens/UserListScreen'
// import UserEditScreen from './screens/UserEditScreen'
// import ProductListScreen from './screens/ProductListScreen'
// import ProductEditScreen from './screens/ProductEditScreen'
// import OrderListScreen from './screens/OrderListScreen'

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="" element={<HomeScreen/>} exact />
            <Route path='/product/:id' element={<ProductScreen/>}/>
            <Route path='/cart/' element={<CartScreen/>}/>
            <Route path='/cart/:id' element={<CartScreen/>}/>
            <Route path='*' element={<NoPageFound/>}/>
            <Route path='/shipping' element={<ShippingScreen/>} />
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
            <Route path='/profile' element={<ProfileScreen/>} />
            <Route path='/payment' element={<PaymentScreen/>} />
            <Route path='/placeorder' element={<PlaceOrderScreen/>} />
            {/* 
            
            <Route path='/order/:id' component={OrderScreen} />
           
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />

            <Route path='/admin/productlist' component={ProductListScreen} />
            <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

            <Route path='/admin/orderlist' component={OrderListScreen} /> */}
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
