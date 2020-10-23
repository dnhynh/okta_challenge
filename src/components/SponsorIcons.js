import React, {useState} from "react"
import SponsorBlock from "./SponsorBlock"
import PageModal from "./PageModal"

const iconImages = [
    'https://www.oktane20.com/static/a1d7c0d26a23639295442a63064c6feb/65e33/Oktane_Sponsor_AWS.png',
    'https://www.oktane20.com/static/4465a786aca0f6e9c8d24f39f23d4f57/65e33/BetterCloud_logo_white.png',
    'https://www.oktane20.com/static/d915809d30ea25981708be86dfef0ad7/65e33/BeyondID_Logo_White.png',
    'https://www.oktane20.com/static/841dda7a20f95cb7b6af49aa2789de36/65e33/Oktane20_Sponsor_Box.png',
    'https://www.oktane20.com/static/c3b322d15679c0d9670c4558d81486c4/65e33/dropbox-new-white.png'
]

const SponsorIcons = (props) => {
    const [modalActive, setModalActive] = useState('')
    return (
        <>
            <div style={{textAlign: 'center', marginTop: 40}}>
                <h3 style={{color: '#f89e1c', fontSize: '2.34521rem'}}>Platinum Sponsors</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {iconImages.map((assetUrl) => (
                        <SponsorBlock imgUrl={assetUrl} toggleModal={setModalActive} />
                    ))}
                </div>
            </div>
            <PageModal modalActive={modalActive} toggleModal={setModalActive}/>
        </>
    )
}

export default SponsorIcons