import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface ContainerProps {
  children: ReactNode;
}

export const Layout = ({ children }: ContainerProps) => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}