import React, { useEffect, useState } from 'react'
import SlideLeft from './SlideLeft'
import SlideRight from './SlideRight'
import handleNotification from '../../../api/get/notifcation'
import MediaQuery from 'react-responsive'

const Slide = () => {
  const [tab, setTab]= useState(1)
  const [data, setData]= useState([])
  const [loading, setLoading]= useState()
  useEffect(()=> {
    (async ()=> {
      try {
        setLoading(true)
        const result= await handleNotification()
        setData(result)
      } catch (error) {
        setLoading(false)
      }
      finally {
        setLoading(false)
      }
    })()
  }, [])

  const handleTab= (tab)=> {
    setTab(tab)
  }
  
  return (
    <>
      <SlideLeft data={data} tab={tab} onClick={handleTab} />
      <MediaQuery minWidth={625}>
        <SlideRight data={data} tab={tab} onClick={handleTab} />
      </MediaQuery>
    </>
  )
}

export default Slide
