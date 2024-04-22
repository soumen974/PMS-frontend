import React from 'react'
import Header from '../../../commonCompo/Header'
import Footer from '../../../auth/components/Footer'
import SearchBar from '../../student/pages/SearchBar'
import Main from './Main.jsx';

export default function HrHome() {
  return (
    <>
      <Header/>
      <SearchBar/>
      <Main/>
      <Footer/>
    </>
  )
}
