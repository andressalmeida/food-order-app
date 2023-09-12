import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
<div className={classes.content}>{props.children}</div>

    </div>
}



const portalElemtnt = document.getElementById('overlays')

const Modal = props => {

    return (
        <>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElemtnt)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElemtnt)}
        </>
    )
}

export default Modal;