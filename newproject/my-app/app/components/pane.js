// ./app\Components\pane.js

// import { useClient } from "next/client"; 

// const Pane = () => {
//   useClient(); // Mark the entire component as a client entry

//   const [isContentVisible, setContentVisible] = useState(true);

//   const handleToggleContent = () => {
//     setContentVisible((prev) => !prev);
//   };

//   return (
//     <main>
//       <div className={style.window}>
//         <div className={style.titleBar}>
//           <button className={style.upwardArrow} onClick={handleToggleContent}>
//             &#8593;
//           </button>
//           <button className={style.closeButton}>&#10006;</button>
//         </div>
//         <div
//           className={`${style.content} ${isContentVisible ? style.visible : ""}`}
//         >
//           <h3>Content</h3>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Pane;


// import React from "react";
// import style from "./style.module.css";
// const Pane = ({title, width, height}) => {
//   return(
//     <div className={style.window} style={{width,height}}>
//       <div className={style.titleBar}>
//         <div className={style.buttons}>
//           <button className={style.button}>&#8593;</button>
//           <button className={style.button}>&#10006;</button>
//         </div>
//       </div>

//       <div className={style.content}>Content</div>
//     </div>
//   );
// };

// export default Pane;

// components/Pane.js

// 'use client';
// import React from 'react';
// import styles from './style.module.css';


// const Pane = ({  width, height }) => {
//   const defaultContent = "lorem"
//   const style = {
//     '--width': width,
//     '--height': height,
//     // gridRow: `span ${height} / span ${height} `,
//     // gridColumn: `span ${width} / span ${width} `,
//   };
 
//   return (
    
//     <div className={styles.pane} style={style}>
//       <div className={styles.titleBar}>
//         <div className={styles.buttons}>
//           <button className={styles.upwardArrow}>&#8593;</button>
//           <button className={styles.closeButton}>X</button>
//         </div>
//       </div>
//       <div className={styles.content}>Content goes here</div>
//     </div>
//   );
// };

// export default Pane;






// "use client";

// import React, { useState } from 'react';
// import styles from './style.module.css';

// const Pane = ({ width, height }) => {
//   const [isContentVisible, setContentVisible] = useState(true);

//   const toggleContentVisibility = () => {
//     setContentVisible(!isContentVisible);
//   };

//   const style = {
//     '--width': width,
//     '--height': height,
//   };

//   return (
//     <div className={styles.whole}>
//       <div className={styles.titleBar}>
//         <div className={styles.buttons}>
//           <button className={styles.arrowButton} onClick={toggleContentVisibility}>
//             {isContentVisible ? '▲' : '▼'}
//           </button>
//           <button className={styles.closeButton}>X</button>
//         </div>
//       </div>
//       <div className={`${styles.pane} ${isContentVisible ? styles.visible : styles.hidden}`} style={style}>
      
//       <div className={styles.content}>Content goes here</div> 
//     </div>
//     </div>
    
//   );
// };

// export default Pane;













"use client";
import Draggable from 'react-draggable';
import styles from "./style.module.css";
import React, { useState } from "react";
import { useRef, useEffect } from 'react';

export default function Pane({width, height}) {
    const [isContentVisible, setContentVisible] = useState(true);
    const style = {
        "--width": width,
        "--height": height,
    };
    

    const toggleContentVisibility = () => {
      setContentVisible(!isContentVisible);
    };
    


  return (
    <Draggable>
      <div className={isContentVisible?styles.fullBox:styles.fullBox1} style={style}>
        <div  className={styles.heading}>
        <button
          className={styles.arrowButton}
          onClick={toggleContentVisibility}
        >
          {isContentVisible ? "▲" : "▼"}
        </button>
        <button className={styles.closeButton}>X</button>

        </div>
        {isContentVisible ?
            <div className={styles.content}>Content goes here yergjjbjfmijgfmi jfgmiiiiiiiiiiiiiiiiii</div>
            :
            <div className={styles.content}></div>
        }
    </div>
    </Draggable>
    
  );
}