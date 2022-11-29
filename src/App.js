import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import './App.css';
import { routes } from './routes/Routs';


function App() {
  return (
    <div className="dark">
     <RouterProvider router={routes}></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
