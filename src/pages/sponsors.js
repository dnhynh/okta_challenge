import React from "react"
import SponsorsHeader from "../components/SponsorsHeader"
import SponsorIcons from "../components/SponsorIcons"

const sponsors = () => {

  return (
    <div style={{backgroundColor: "#13499e", minHeight: "100vh", position: "relative"}}>
        <div style={{padding: "96px 24px 0 24px"}}>
            <SponsorsHeader />
            <SponsorIcons />
        </div>
    </div>
  )
}

export default sponsors