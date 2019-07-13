import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const Layout = ({children}) => {

    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    );
}

export default Layout;