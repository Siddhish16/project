// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import styles from "./page.module.css";
// import Pane from "./Components/pane";
// import BottomMenuBar from "./Components/menu";

// const Page = () => {
//   const [visiblePanes, setVisiblePanes] = useState([true, true, true, true]);
//   const handleMenuBarButtonClick = (buttonIndex) => {
//     const updatedVisiblePanes = [...visiblePanes];
//     updatedVisiblePanes[buttonIndex - 1] =
//       !updatedVisiblePanes[buttonIndex - 1];
//     setVisiblePanes(updatedVisiblePanes);
//   };
//   const handleClosePane = (paneTitle) => {
//     const paneIndex = parseInt(paneTitle.split(" ")[1], 10) - 1;
//     const updatedVisiblePanes = [...visiblePanes];
//     updatedVisiblePanes[paneIndex] = false;
//     setVisiblePanes(updatedVisiblePanes);
//   };
//   const handleToggleContent = (paneIndex) => {
//     setActivePane(activePane === paneIndex ? null : paneIndex);
//     const updatedVisiblePanes = visiblePanes.map(
//       (_, index) => index === paneIndex
//     );
//     setVisiblePanes(updatedVisiblePanes);
//   };
//   return (
//     <div className={styles.whole}>
//       <div className={styles.main}>
//         {visiblePanes[0] && (
//           <Pane
//             title="Pane 1"
//             width="45%"
//             height="43%"
//             onClose={handleClosePane}
//             onToggleContent={() => handleToggleContent(0)}
//           />
//         )}
//         {visiblePanes[1] && (
//           <Pane
//             title="Pane 2"
//             width="45%"
//             height="43%"
//             onClose={handleClosePane}
//             onToggleContent={() => handleToggleContent(0)}
//           />
//         )}
//         {visiblePanes[2] && (
//           <Pane
//             title="Pane 3"
//             width="45%"
//             height="43%"
//             onClose={handleClosePane}
//             onToggleContent={() => handleToggleContent(0)}
//           />
//         )}
//         {visiblePanes[3] && (
//           <Pane
//             title="Pane 4"
//             width="45%"
//             height="43%"
//             onClose={handleClosePane}
//             onToggleContent={() => handleToggleContent(0)}
//           />
//         )}
//       </div>
//       <BottomMenuBar onButtonClick={handleMenuBarButtonClick} />
//     </div>
//   );
// };

// export default Page;


// pages/index.js
'use client';
import React, { useState } from 'react';
import Pane from './components/pane';
import BottomMenuBar from './components/menu';
import Graph from './components/graph';  // Import the Graph component
import styles from './page.module.css';

const Page = () => {
    const [visiblePanes, setVisiblePanes] = useState([true, true, true, true]);
    const [activePane, setActivePane] = useState(null);

    const handleMenuBarButtonClick = (buttonIndex) => {
        const updatedVisiblePanes = [...visiblePanes];
        updatedVisiblePanes[buttonIndex - 1] = !updatedVisiblePanes[buttonIndex - 1];
        setVisiblePanes(updatedVisiblePanes);
    };

    const handleClosePane = (paneTitle) => {
        const paneIndex = parseInt(paneTitle.split(' ')[1], 10) - 1;
        const updatedVisiblePanes = [...visiblePanes];
        updatedVisiblePanes[paneIndex] = false;
        setVisiblePanes(updatedVisiblePanes);
    };

    const handleToggleContent = (paneIndex) => {
        setActivePane(activePane === paneIndex ? null : paneIndex);
        const updatedVisiblePanes = visiblePanes.map((_, index) => index === paneIndex);
        setVisiblePanes(updatedVisiblePanes);
    };

    return (
        <div className={styles.whole}>
            <div className={styles.main}>
                {visiblePanes[0] && (
                    <Pane
                        title="Pane 1"
                        width="25%"
                        height="80%"
                        onClose={handleClosePane}
                        onToggleContent={() => handleToggleContent(0)}
                    />
                )}
                {visiblePanes[1] && (
                    <Pane
                        title="Pane 2"
                        width="65%"
                        height="80%"
                        onClose={handleClosePane}
                        onToggleContent={() => handleToggleContent(1)}
                    />
                )}
                {visiblePanes[2] && (
                    <Pane
                        title="Pane 3"
                        width="45%"
                        height="43%"
                        onClose={handleClosePane}
                        onToggleContent={() => handleToggleContent(2)}
                    />
                )}
                {visiblePanes[3] && (
                    <Pane
                        title="Pane 4"
                        width="45%"
                        height="43%"
                        onClose={handleClosePane}
                        onToggleContent={() => handleToggleContent(3)}
                    />
                )}
            </div>
            <BottomMenuBar onButtonClick={handleMenuBarButtonClick} />
        </div>
    );
};

export default Page;
