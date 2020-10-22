import React from "react"
import styles from "./SponsorBlock.module.css"

const SponsorBlock = ({imgUrl, toggleModal}) => {
    return (
        <div className={styles.sponsorBlock} onClick={() => {toggleModal(imgUrl)}}>
            <img src={imgUrl} alt="Sponsor Logo"/>
        </div>
    )
} 

export default SponsorBlock