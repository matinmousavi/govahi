import { useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  const router = useRoutes(routes);
  
  return (
    <div className='font-vazir container'>
    {router}
    </div>
  )
}

export default App
