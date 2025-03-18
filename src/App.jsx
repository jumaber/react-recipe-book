import './App.css'
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';


function App() {

  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-col h-full w-xs p-6 bg-white justify-between'>
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <div>
          <Footer />
        </div>
      </div>
        <div className='flex flex-col p-6 w-screen h-full w-full bg-orange-50'>
          <MainContent />
      </div>
    </div>     
  )
}

export default App
