import { ReactNode } from "react";
import { Container } from "./Container";
import { Navbar } from "./Navbar";

interface ContainerProps {
  children: ReactNode;
}

export const Layout = ({ children }: ContainerProps) => {
  return (
    <>
      <Navbar />
      <Container>
        
      </Container>
    </>
  )
}