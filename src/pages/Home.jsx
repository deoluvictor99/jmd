import React from 'react'
import Header from '/src/components/Header.jsx'
import Services from '/src/components/Services'
import About from '/src/components/About'
import Why from '/src/components/why'
import Choice from '/src/components/choice'
import Help from '/src/components/Help'

export default function Home() {
    return (
        <>
            <Header/>
            <Services/>
            <About/>
            <Why/>
            <Choice/>
            <Help/>
        </>
    )
}
