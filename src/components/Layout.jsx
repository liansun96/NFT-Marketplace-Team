import React, { useEffect, useState } from "react";
import Rsidebar from "./Blog/Rsidebar";
import ScrollBtn from "./ScrollBtn";
import { Bars } from "react-loader-spinner";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-primary">
        <Bars
          height="80"
          width="80"
          color="#E039FD"
          ariaLabel="bars-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div>
      <Sidebar/>
      <Rsidebar />
      <ScrollBtn />
      {children}
    </div>
  );
};

export default Layout;
