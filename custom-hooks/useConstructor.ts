import { useRef } from "react";

type ConstructorCallBack = () => void;

function useConstructor(callback:ConstructorCallBack):void {
    let isRun = useRef(false);
    if(isRun.current === false) {
        callback();
        isRun.current = true;
    }
}

export default useConstructor;