import { NavLink, Outlet } from "react-router-dom";
import './App.css';
import { useEffect, useState } from "react";

export default function RootLayout() {

  // const [user, setUser] = useState(null);

  // const retrieveUser = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8000/user', {
  //       credentials: 'include',
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       setUser(data);
  //     } else {
  //       console.log("Error: ", response.status);
  //     }
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // } 

  return (
    <div className="rootLayout">
      <header>
        {/* <button onClick={retrieveUser}>Click Me</button> */}
        <nav>
          <h1 style={{ marginLeft: '10px' }}>Weather App</h1>
          {/* <p>{user ? `Welcome, ${user}` : 'Welcome, guest'}</p>  */}
          <div className="navBar">
          <NavLink className="navItem" to="/">Home</NavLink>
          <NavLink className="navItem" to="login">Login</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}