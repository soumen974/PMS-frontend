import React from 'react';
import Header from '../../../commonCompo/Header'
import SearchBar from '../../student/pages/SearchBar'
import Footer from '../../../auth/components/Footer'
import Main from './Main'

export default function AdminHome() {
  return (
    <>
        <Header/>
        <SearchBar/>
        <Main/>
        <Footer/>
    </>
  )
}
