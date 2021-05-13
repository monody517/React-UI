import Icon from "../icons/icon"
import React, { Fragment, ReactElement, ReactNode } from "react"
import './dialog.scss'
import scopedClassMeak from "../helper/classMeak"
import ReactDOM from "react-dom"

interface dialogProps{
    visible:boolean,
    buttons?:Array<ReactElement>
    onClose:React.MouseEventHandler
    isMask?:boolean
}

const scopedClass = scopedClassMeak('jui-dialog')
const sc = scopedClass

const Dialog:React.FunctionComponent<dialogProps> = (props)=>{
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
            {props.buttons && <footer className={sc('footer')}>
                {props.buttons && props.buttons.map((button,index)=>React.cloneElement(button,{key:index}))}
            </footer>  }       
        </div>
    </Fragment> : null
    return(
        ReactDOM.createPortal(x,document.body)
    )

}

const model = (context:ReactNode, buttons?:Array<ReactElement>) => {
    const onClose = ()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = <Dialog 
        visible={true} 
        buttons = {buttons}
        onClose={onClose}>{context}
    </Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component,div)
    return onClose
}

const alert = (context:string) =>{
    const button = <button onClick={()=>{onClose()}}>ok</button>
    const onClose = model(context,[button])
}

const confirm = (context:string,yes?:()=>void,no?:()=>void)=>{
    const onYes = ()=>{
        onClose()
        yes&&yes()
    }
    const onNo = ()=>{
        onClose()
        no&&no()
    }
    const buttons=[
        <div onClick={()=>onYes()}>yes</div>,
        <div onClick={()=>onNo()}>no</div>
    ] 
    const onClose = model(context,buttons)
}


export {alert,confirm,model}
export default Dialog
