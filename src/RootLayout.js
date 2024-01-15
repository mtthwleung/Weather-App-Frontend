import { NavLink, Outlet } from "react-router-dom";
import './App.css';

export default function RootLayout() {
  return (
    <div className="rootLayout">
      <header>
        <nav>
          <h1 style={{marginLeft: '10px'}}>Weather App</h1>
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