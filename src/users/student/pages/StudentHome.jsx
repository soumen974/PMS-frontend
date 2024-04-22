import React from 'react'
import Header from '../../../commonCompo/Header.jsx';
import SearchBar from './SearchBar.jsx'
import Main from './Main.jsx'
import Footer from '../../../auth/components/Footer.jsx';

const Home = () => {
  return (
    <>
        <Header/>
        <SearchBar/>
        <Main/>
        <Footer/>
    </>
  )
}

export default Home