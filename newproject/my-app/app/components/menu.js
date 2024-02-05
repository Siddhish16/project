// // BottomMenuBar.js
// 'use client';
// import React from 'react';
// import styles from './style.module.css';

// const BottomMenuBar = ({ onButtonClick }) => {
//   return (
//     <div className={styles.bottomMenuBar}>
//       <button onClick={() => onButtonClick(1)}>Button 1</button>
//       <button onClick={() => onButtonClick(2)}>Button 2</button>
//       <button onClick={() => onButtonClick(3)}>Button 3</button>
//       <button onClick={() => onButtonClick(4)}>Button 4</button>
//     </div>
//   );
// };

// export default BottomMenuBar;

"use client";
import React from "react";
import styles from "./style.module.css";
const BottomMenuBar = ({ onButtonClick }) => {
  return (
    <div className={styles.bottomMenuBar}>
      <button onClick={() => onButtonClick(1)}>Button 1</button>
      <button onClick={() => onButtonClick(2)}>Button 2</button>
      <button onClick={() => onButtonClick(3)}>Button 3</button>
      <button onClick={() => onButtonClick(4)}>Button 4</button>
    </div>
  );
};
export default BottomMenuBar;
