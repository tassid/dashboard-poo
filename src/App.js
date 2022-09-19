import { useState } from 'react';
import './App.css';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <header>
        <h1>Dashboard Granja</h1>
      </header>
    </div>
  );
}
 
export default App;
