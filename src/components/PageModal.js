import React from "react"
import styles from "./PageModal.module.css"

const PageModal = ({imgUrl, modalActive, toggleModal}) => {
    const modalState = modalActive ? `${styles.modalContainer} ${styles.active}`: `${styles.modalContainer}`
    return (
        <div className={modalState}>
            <div>
                {/* use svg in production */}
                <button onClick={() => toggleModal('')} className={styles.closeButton}>X</button>
                <img src={modalActive} alt="Sponsor Logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default PageModal