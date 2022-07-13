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
          {children}
        </div>
      </div>
    </>
  )
}