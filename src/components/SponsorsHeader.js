import React from "react"
import styles from "./SponsorsHeader.module.css"

const SponsorsHeader = () => {

    return (
        <>
            <h2 className={styles.sectionHeader}>Sponsors</h2>
            <div className={styles.container}>
                <div style={{color: "#fff", maxWidth: "90%", textAlign: "center", margin: "0 auto"}}>
                    <p style={{textAlign: "center", marginBottom: 24}}>Oktane20 is fueled by support of our sponsors. Generate business with a forward-thinking group of IT professionals, and increase exposure for your solutions and services. Make sure you are a part of more strategic IT discussions that center on building new and differentiated experiences in an increasingly mobile and cloud-centric world.
                    <br/><br/>
                    Contact us at sponsorships@okta.com if you are interested in sponsoring.
                    </p>
                    <a className={styles.pdfAnchor} href="https://www.okta.com/sites/default/files/Oktane20Live_Sponsorship_Prospectus_v5_03062020.pdf">View the sponsorship prospectus</a>
                </div>
            </div>
        </>
    )
}

export default SponsorsHeader