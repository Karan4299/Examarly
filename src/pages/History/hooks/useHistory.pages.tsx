import { useEffect, useRef, useState } from "react";
import { ModalDataProps } from "../../../interfaces/ModalDataProps.interface";


interface Positions {
    left: number,
    top: number,
}

const useHistory = () => {
    const historyTab = useRef(null);
    const [positionsForChildPopOver, setPositionsForChildPopOver] = useState<Positions>({
        left:0,
        top:0
    })
    const [widthForPopOver, setWidthForPopOver] = useState<number>(0);

    const [toShowPopOver, setPopOver] = useState<boolean>(false);

    const handleResize = () => {
        console.log(window.outerHeight, window.outerWidth);
    }

    useEffect(() => {
        console.log(historyTab);
        window.addEventListener('resize', handleResize)
    }, []);

    const handleClose = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log("close");
        setPopOver(false);
    }
    
    const dataForModal: ModalDataProps[] = [
        {
            onClose: handleClose,
            Title: "Strength Bar",
            description: "Introducing strength bar to help you know your week subjects.",
            progress: {
                weak: 33,
                Average: 80,
                Improvement: 66,
                CuttoffLevel: 100
            },
            onFinish: handleClose
        }
    ]
    

    useEffect(() => {
        if( historyTab !== null && historyTab.current !== null){
            const currentPos = historyTab.current as any;
            setPositionsForChildPopOver({
                left: currentPos.offsetLeft,
                top: currentPos.offsetHeight + 10
            })
            setWidthForPopOver(currentPos.offsetWidth);
        }
    }, [historyTab]);

    return {
        historyTab,
        toShowPopOver,
        positionsForChildPopOver,
        widthForPopOver,
        dataForModal,
        setPopOver,
    }
}

export default useHistory;