
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <NavBar />
        <div className="flex-grow overflow-y-auto pt-[60px]">
          <Outlet />
        </div>
    </div>
  );
}

export default Main;