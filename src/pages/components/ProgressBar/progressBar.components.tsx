import React from "react";
import "./progressBar.components.scss";

interface ProgressBarProps {
    progressValue: number;
    progressColor: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    progressValue,
    progressColor
}: ProgressBarProps) => {
    return (
        <div className="progress-bar-main-container">
            <div className="progress-bar-background-progress-bar" style={{width:`${progressValue}%`, backgroundColor: progressColor}}></div>
            <div className="progress-bar-top-progress-bar-framer">
                <div className="progress-bar-top-progress-bar-item" style={{marginLeft: "33%"}}></div>
                <div className="progress-bar-top-progress-bar-item" style={{marginLeft: "33%"}}></div>
            </div>
        </div>
    )
}

export default ProgressBar