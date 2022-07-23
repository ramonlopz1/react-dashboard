import { Route, Routes } from 'react-router-dom'
import Product from '../components/product/Product'

export default function RouteProduct() {
    return (
        <Routes>
            <Route path="/product" element={<Product />} />
        </Routes>

    )
}