import { ReactNode, FunctionComponent } from 'react'
import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
  children?: ReactNode
}

const Layout: FunctionComponent = ({ children }: Props) => {
    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout
