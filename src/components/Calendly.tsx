import { PopupWidget } from 'react-calendly'


export default function Calendly() {
    return (
        <PopupWidget  url="https://calendly.com/kiraaziz2020" rootElement={document.getElementById('root')} text="Click here to schedule!" textColor="#ffffff" color="#00a2ff" />
    )
}
