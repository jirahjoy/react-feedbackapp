
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
// import Post from './components/Post';

function App(){
    
   
   
    
    

    return(
        <>
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path='/' element={
                            <>
                                 <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>    
                        </Route>
                        <Route path='/about' element={<AboutPage/>} />
                        {/* <Route path='/post/' element={<Post/>} /> */}
                    </Routes>

                
                <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
        </>
        
    )
}
export default App