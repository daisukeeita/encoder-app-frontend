import React, { useContext } from "react";
import { SelectTabContext } from "../../../contexts/SelectTabContext";
import { AuthenticationContext } from "../../../contexts/AuthenticationContext";

export const NavigationComponent = () => {
  const { selectedTab, setSelectedTab } = useContext(SelectTabContext);
  const { setIsAuthenticated } = useContext(AuthenticationContext);

  const handleLogout = (event : React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    setIsAuthenticated(false);
  }

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm bottom-0 fixed">
        <div className="navbar-start">
          <button 
            type="submit"
            className="btn btn-accent" 
            onClick={handleLogout}
          >
              Logout
          </button>
        </div>

        <div className="navbar-center bg-base-300 rounded-full">
          <div className="tabs tabs-border tabs-top">
            <input
              type="radio"
              name="dashboard_component"
              className="tab"
              aria-label="Dashboard"
              checked={selectedTab === "dashboard_component"}
              onChange={event => setSelectedTab(event.target.name)}
            />
            
            <input 
              type="radio"
              name="encode_vehicle"
              className="tab"
              aria-label="Encode Vehicle"
              checked={selectedTab === "encode_vehicle"}
              onChange={event => setSelectedTab(event.target.name)}
            />
          </div>
        </div>

        <div className="navbar-end avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-8 rounded-full">
            <span className="text-xs">UI</span>
          </div>
        </div>
      </div>
    </>
  )
};