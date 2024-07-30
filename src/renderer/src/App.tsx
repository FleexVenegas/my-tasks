import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Layout from './components/organisms/Layout/Layout'

const App = () => {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    )
}

export default App
