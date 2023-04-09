import 'App.css';
import AuthProvider from 'providers/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import MainNavigation from 'routes'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={MainNavigation}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
