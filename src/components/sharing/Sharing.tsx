import { TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share"

export const Sharing:React.FC<{}>=()=>{
    return <>
    <WhatsappShareButton
    url="https://www.wikipedia.org/"
    about="something"
    >
        <WhatsappIcon size={32} round={true} />
    </WhatsappShareButton>
    </>
}