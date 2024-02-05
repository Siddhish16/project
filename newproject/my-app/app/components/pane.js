// components/Pane.js
import React, { useState } from 'react';
import styles from './style.module.css';
import Graph from './graph';  // Import the new Graph component

const Pane = ({ title, width, height, onClose, onToggleContent }) => {
    const [isContentVisible, setContentVisible] = useState(true);
    const style = {
        "--width": width,
        "--height": height,
    };

    const toggleContentVisibility = () => {
        setContentVisible(!isContentVisible);
    };

    return (
        <div className={isContentVisible ? styles.fullBox : styles.fullBox1} style={style}>
            <div className={styles.heading}>
                <div className={styles.title}>{title}</div>
                <button className={styles.arrowButton} onClick={toggleContentVisibility}>
                    {isContentVisible ? '▲' : '▼'}
                </button>
                <button className={styles.closeButton} onClick={() => onClose(title)}>
                    X
                </button>
            </div>
            {isContentVisible ? (
                title === 'Pane 2' ? (
                    <Graph />  // Render the Graph component for Pane 2
                ) : (
                    <div className={styles.content}>
                        Content goes here...
                    </div>
                )
            ) : (
                <div className={styles.content}></div>
            )}
        </div>
    );
};

export default Pane;
