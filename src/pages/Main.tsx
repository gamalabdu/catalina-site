
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;