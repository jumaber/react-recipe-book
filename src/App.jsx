import './App.css'
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen w-64 px-6 py-12 bg-white flex flex-col justify-between">
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <Footer />
      </div>

      {/* Main Content with left margin */}
      <div className="ml-64 h-screen overflow-y-auto p-8 py-12 bg-orange-100 w-full">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
