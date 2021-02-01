import {useEffect, useState, useContext} from 'react'
import {Context} from '../components/stores/Store'
import {motion, useSpring } from 'framer-motion'

function Layout(props) {
  const [store, setStore] = useContext(Context)
  const s = useSpring(0, {stiffness: 30})
  const [hue, setHue] = useState(0)


  useEffect(() => {
    s.onChange(v => setHue(v))
  }, [])
  useEffect(() => {
    s.set(Math.random() * 360)
  },[store])

    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          body {
            background-color: hsla(60, 12%, 87%, 1)
          }
        `}</style>
      </div>
    )
  }
  
  export default Layout