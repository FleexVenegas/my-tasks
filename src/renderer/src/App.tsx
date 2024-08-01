import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Login from './pages/Login/Login'
import Layout from './components/organisms/Layout/Layout'
import Task from './pages/Task/Task'

const App = () => {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Task />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    )
}

export default App
