import React from "react";
import { X } from "react-feather";
import { PopOverProps } from "../../../interfaces/PopOverProps.interfaces";
import ProgressBar from "../ProgressBar";
import usePopOvers from "./hooks/usePopOver.components";
import "./popover.components.scss";



const PopOver: React.FC<PopOverProps> = (
    {
        positionForElement,
        widthForPopOver,
        dataForModal,
    }: PopOverProps
) => {

    const {
        // this takes care of active cell
        activeCell,
        //  props from the parent button
        dataForModalS,
        // handles click on the modal
        handlePopOverClick,
        //  this function is just to get colour for active horizontal bar below button
        getActiveBarColor,
        handleGetProgressValue
    } = usePopOvers( {positionForElement, widthForPopOver, dataForModal});
    
    return (
        <div className="popover-main-container" onClick={handlePopOverClick}
            style={{position: "absolute", left: positionForElement.left, top: positionForElement.top}}
        >
            <div className="popover-hori-3-bars" style={{width: widthForPopOver}}>
                {/* 1, 2, 3 are for event delegation */}
                <div className="popover-bar 1" style={{ backgroundColor: getActiveBarColor(1)}}/>
                <div className="popover-bar 2" style={{ backgroundColor: getActiveBarColor(2)}}/>
                <div className="popover-bar 3" style={{ backgroundColor: getActiveBarColor(3)}}/>
            </div>
            <div className="popover-bottom-panel" style={{marginLeft: ((activeCell-1)*(widthForPopOver*.32)) + ((activeCell-1)*2.5) + (widthForPopOver*.20)}}>
                <div className="popover-vertical-line" />
                <div className="popover-bottom-modal" style={{marginLeft: 0-(widthForPopOver*.20) + ((activeCell-1)*2.5)}}>
                    {
                        // checks if the data has been passed for the current selected modal or not
                        dataForModalS[activeCell-1] ? (
                            <>
                                <div className="popover-bottom-modal-container cancel" onClick={dataForModal[activeCell-1].onClose}><X /></div>
                                <div className="popover-bottom-modal-container title-description">
                                    <div className="popover-bottom-modal-title" >
                                        {dataForModalS[activeCell-1].Title}
                                    </div>
                                    <div className="popover-bottom-modal-description" >
                                        {dataForModalS[activeCell-1].description}
                                    </div>
                                </div>
                                <div className="popover-bottom-modal-container progress">
                                    <div className="popover-bottom-modal-progress weak">
                                        <div className="popover-bottom-modal-title">Weak</div>
                                        <ProgressBar progressValue={handleGetProgressValue("weak")} progressColor={"#FD755E"} />
                                    </div>
                                    <div className="popover-bottom-modal-progress Average">
                                        <div className="popover-bottom-modal-title">Average</div>
                                        <ProgressBar progressValue={handleGetProgressValue("Average")} progressColor={"#FFD503"} />
                                    </div>
                                    <div className="popover-bottom-modal-progress Improvement">
                                        <div className="popover-bottom-modal-title">Improvement</div>
                                        <ProgressBar progressValue={handleGetProgressValue("Improvement")} progressColor={"#FF9940"} />
                                    </div>
                                    <div className="popover-bottom-modal-progress CutoffLevel">
                                        <div className="popover-bottom-modal-title">CutoffLevel</div>
                                        <ProgressBar progressValue={handleGetProgressValue("CuttoffLevel")} progressColor={"#569FFE"} />
                                    </div>
                                </div>
                                <div className="popover-bottom-modal-container finish">
                                    <div className="popover-bottom-finish-button" onClick={(event) => dataForModalS[activeCell-1].onClose(event)}>
                                        Finish
                                    </div>
                                </div>
                            </>
                        ) : "Coming Soon "
                    }
                </div>
            </div>
        </div>
    )
}

export default PopOver;