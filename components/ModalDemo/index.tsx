import React, { useEffect, useState } from 'react';
type ModalProps = {
    onCancel ? : () => void;
    onOk ? : () => void;
    isVisible? : boolean;
    renderFooter ? : () => JSX.Element;
}
const CLASS_DEFAULT = 'tcl-modal__wrapper';
const ModelDemo : React.FC <ModalProps> = ({isVisible,children,renderFooter,onCancel,onOk}) => {
    const [classDefault,setClassDefault] = useState(CLASS_DEFAULT);
    
    useEffect(() => {
        let $body = document.querySelector('body');
        if(isVisible){
            setClassDefault((oldClass) => oldClass + ' show');
            // setClassDefault(classDefault + ' show');  -> sai vì ảnh hưởng đến hiệu năng vì khai báo deps
            $body.classList.add('tcl-modal__open');
        }else{
            setClassDefault(CLASS_DEFAULT);
            $body.classList.remove('tcl-modal__open');
        }
    },[isVisible])
    const _renderFooter = () => {
        if(renderFooter){
            return renderFooter();
        }
        return (
            <>
                <button className="tcl-modal__cancel" onClick={onCancel}>Cancel</button>
                <button className="tcl-modal__ok" onClick={onOk}>Ok</button>
            </>
        )
    }
    return (
        <div className={classDefault}>
            <div className="tcl-mask"></div>
            <div className="tcl-dialog">
                <div className="tcl-modal__content">
                    <div className="tcl-modal__header">
                        Title demo
                        <button className="tcl-modal__close">X</button>
                    </div>
                    <div className="tcl-modal__body">
                        {children}
                    </div>
                    <div className="tcl-modal__footer">
                        {_renderFooter()}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ModelDemo;