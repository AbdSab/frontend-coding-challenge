import React from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';

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