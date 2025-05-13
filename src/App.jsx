import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import SubscribePage from './pages/SubscribePage/SubscribePage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage.jsx';



export default function App() {
  return (
    <>
      <Routes>
        {/* here is where we make our individual routes */}
        <Route path='/' element={<HomePage />}/>
        <Route path='/subscribepage' element={<SubscribePage />}/>
        <Route path='/productpage' element={<ProductPage />}/>
        <Route path='/cartpage' element={<CartPage />}/>
        <Route path='/checkoutpage' element={<CheckoutPage />}/>
        <Route path='/orderhistorypage' element={<OrderHistoryPage />}/>
      </Routes>
    </>
  )
}