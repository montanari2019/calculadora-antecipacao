import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './components/DefaultLayout/DefaultLayout'
import { Home } from './pages/Home'


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/history" element={<History />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}