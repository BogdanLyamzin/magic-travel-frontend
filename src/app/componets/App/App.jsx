import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes } from '../../routes';
import Header from '../Header/components/Header/Header'
import Footer from '../Footer/components/Footer/Footer'
// import './../../../shared/styles/scss/plugins.css'
// import './../../../shared/styles/scss/style.css';
// import './../../../shared/styles/scss/templete.css';
// import './../../../shared/styles/scss/skin/skin-1.css'

export const App = () => {
  return <>
    <Header/>
    <AppRoutes />;
    <Footer />
   </>
};
