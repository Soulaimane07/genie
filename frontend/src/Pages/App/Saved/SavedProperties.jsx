import React from 'react'
import Sidebar from "../../../Components/Sidebar/Sidebar"
import Header from "../../../Components/Header/Header"
import Footer from "../../../Components/Footer/Footer"
import PropertiesPropety from '../../../Components/Properties/PropertiesPropety'
import { useSelector } from 'react-redux'

export default function SavedProperties() {
    const lang = useSelector((state) => state.user.language.data.sidebar);
  const savedPropertiesList = useSelector(state => state.properties.saved)


  return (
    <>
      <div className='flex'>
        <Sidebar />

        <main className='bg-gray-100 w-full px-10 min-h-screen'>
          <Header pageTitle={lang.saved} />

          <div className='grid grid-cols-3 gap-6 px-8'>
            {savedPropertiesList?.map((item,key)=>(
              <PropertiesPropety data={item} key={key} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
