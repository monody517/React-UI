import Icon from "../icons/icon"
import React, { Fragment, ReactElement } from "react"
import './dialog.scss'
import scopedClassMeak from "../helper/classMeak"
import ReactDOM from "react-dom"

interface dialogProps{
    visible:boolean,
    buttons:Array<ReactElement>
    onClose:React.MouseEventHandler
    isMask?:boolean
}

const scopedClass = scopedClassMeak('jui-dialog')
const sc = scopedClass

const dialog:React.FunctionComponent<dialogProps> = (props)=>{
    const onClickClose:React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onMaskClose:React.MouseEventHandler = (e) => {
        if(props.isMask){
            props.onClose(e)
        }
        
    }

    const x = props.visible?
    <Fragment>
        <div className={sc('mask')} onClick={onMaskClose}></div>
        <div className={sc()}>
            <div className={sc('close')} onClick={onClickClose}>
                <Icon name="close"></Icon>
            </div>
            <header className={sc('header')}>tishi</header>
            <main className={sc('main')}>{props.children}</main>
            <footer className={sc('footer')}>
                {props.buttons.map((button,index)=>React.cloneElement(button,{key:index}))}
            </footer>
            
        </div>
    </Fragment> : null
    return(
        ReactDOM.createPortal(x,document.body)
    )
}

export default dialog