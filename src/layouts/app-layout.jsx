import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/header";
import '../App.css';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Header />
      {isLoading && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#007bff' }}>
          Loading...
        </div>
      )}
      <div className='container'>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;