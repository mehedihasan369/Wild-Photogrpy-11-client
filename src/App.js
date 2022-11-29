import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import { routes } from './routes/Routes';
import './App.css';
import { PhotoProvider } from 'react-photo-view';





function App() {
  return (
    <div className="dark">
     <PhotoProvider> <RouterProvider router={routes}></RouterProvider></PhotoProvider>
     
     <Toaster></Toaster>
    
    </div>
  );
}

export default App;
