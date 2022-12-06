import React from 'react'
import { Diagram } from '../components/Diagram'
import { Container } from 'react-bootstrap'
import {motion} from "framer-motion"


export function BarChart() {
  return (
    <motion.div
    className="vh-100"
    initial={{ opacity: 0, x: "-100px", filter: "blur(4px)" }}
    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.5 }}
    >
      
    <Container className='vh-100'>

      <Diagram ></Diagram>
    </Container>
    </motion.div>
  )
}
