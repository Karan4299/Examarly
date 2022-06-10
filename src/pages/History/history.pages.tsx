import React from "react";
import { PopOver } from "../components";
import "./history.pages.scss";
import useHistory from "./hooks/useHistory.pages";

const History: React.FC = () => {
    const {
        // this is the useRef to get positon of button we have placed
        historyTab,
        //  this is a boolean state responsible to show whether to show popover or not
        toShowPopOver,
        //  depends upn the button it will give position for popover
        positionsForChildPopOver,
        // here you can pass width for the popover
        widthForPopOver,
        //  data for popover. structure is available in interface
        dataForModal,
        // this is set function for to show pop over
        setPopOver
    } = useHistory();
    

    return (
        <div className="main-container" style={{backgroundColor: toShowPopOver ? "rgba(58, 55, 82, .8)" : "white"}}>
            <div ref={historyTab} className="history-tab" onClick={() => setPopOver(!toShowPopOver)}>
                History
            </div>
            {
                // checking if history tab data is null and to show popover
                historyTab !== null && toShowPopOver &&
                <div className="history-popover-container">
                    <PopOver 
                        positionForElement={positionsForChildPopOver} 
                        widthForPopOver={widthForPopOver} 
                        dataForModal={dataForModal}
                    />
                </div>
            }
            click on button
            
        </div>
    )
}

export default History;