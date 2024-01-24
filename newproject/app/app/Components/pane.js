// "use client";
// // ./app/Components/Pane.js
// import React, { useState } from "react";
// import styles from "./style.module.css";

// const Pane = ({ width, height }) => {
//   const [isContentVisible, setContentVisible] = useState(true);

//   const toggleContentVisibility = () => {
//     setContentVisible(!isContentVisible);
//   };

//   const style = {
//     "--width": width,
//     "--height": height,
//   };

//   return (
//     <div className={styles.main}>
//       <div className={styles.titleBar} style={style}>
//         <button
//           className={styles.upwardArrow}
//           onClick={toggleContentVisibility}
//         >
//           {isContentVisible ? "▲" : "▼"}
//         </button>
//         <button className={styles.closeButton}>X</button>
//       </div>
//       <div
//         className={`${styles.pane} ${
//           isContentVisible ? styles.visible : styles.hidden
//         }`}
//         style={style}
//       >
//         <div className={styles.content}>Content goes here</div>
//       </div>
//     </div>
//   );
// };

// export default Pane;





"use client";
// ./app/Components/Pane.js
import React, { useState } from "react";
import styles from "./style.module.css";

const Pane = ({ width, height }) => {
  const [isContentVisible, setContentVisible] = useState(true);

  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  const style = {
    "--width": width,
    "--height": height,
  };

  return (
    <div className="styles.main">
      <div className={styles.titleBar} style={style}>
        <button
          className={styles.arrowButton}
          onClick={toggleContentVisibility}
        >
          {isContentVisible ? "▲" : "▼"}
        </button>
        <button className={styles.closeButton}>X</button>
      </div>
      <div
        className={`${styles.pane} ${
          isContentVisible ? styles.visible : styles.hidden
        }`}
        style={style}
      >
        <div className={styles.content}>Content goes here</div>
      </div>
    </div>
  );
};

export default Pane;
