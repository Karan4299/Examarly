import { useEffect, useState } from "react";
import { ModalDataProps } from "../../../../interfaces/ModalDataProps.interface";
import { PopOverProps } from "../../../../interfaces/PopOverProps.interfaces";

const usePopOvers = ({
    positionForElement,
    widthForPopOver,
    dataForModal,
}: PopOverProps) => {


    // this will keep track of the active bar from 3 horizontal bar below button tab
    const [activeCell, setActiveCell] = useState<number>(1);

    // this is the modal data you can pass as oer the ModalData structure
    // if you dont pass then it will show coming soom
    const [dataForModalS, setDataForModalS] = useState<ModalDataProps[]>([]);

    // this effect syncs the dataforModal to local state
    useEffect(() => {
        setDataForModalS(dataForModal);
    }, [dataForModal]);

    // this fucntions helps us to get the active colout for horizontal bar below button
    const getActiveBarColor = (barNumber: number): string => {
        if (barNumber === parseInt(activeCell+"")) {
            return "#FD755E";
        }

        return "#ffffff88";
    }

    // here we are using event delegation. based on what bar is clicked we take the index out of it 
    // and do the further proceding
    const handlePopOverClick = (event: React.SyntheticEvent) => {
        try {
            event.preventDefault();
            const target = event.target as any;
            console.log(event);
            const panelClicked = target.className.split(" ")[1];
            if(panelClicked) {
                setActiveCell(panelClicked);
            }
        } catch (e) {
            console.log(e);
        }
    }

    // this function takes data from modal data and gives to component
    const handleGetProgressValue = (
        cell: "weak" |
        "Average" |
        "Improvement" |
        "CuttoffLevel" 
    ) => {
        return dataForModalS[activeCell-1].progress[cell]
    }

    return {
        activeCell,
        dataForModalS,
        handlePopOverClick,
        getActiveBarColor,
        handleGetProgressValue
    }
}

export default usePopOvers;