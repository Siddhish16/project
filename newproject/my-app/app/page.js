// ./app\page.js
// import { useClient } from 'next/client';

// const Home = () => {
//   // Mark the parent component as a client component
//   useClient();

//   return (
//     <main>
//       <div className={styles.grid}>
//         <div className={styles.gridItem}>
//           <Pane />
//         </div>
//         <div className={styles.gridItem}>
//           <Pane />
//         </div>
//         <div className={styles.gridItem}>
//           <Pane />
//         </div>
//         <div className={styles.gridItem}>
//           <Pane />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Home;

// import Pane from "./Components/pane";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <main>
//       <div className={styles.grid}>
//         <div className={styles.gridItem1}>
//           {" "}
//           <Pane title="Pane 1" width="20%" height="100%" />
//         </div>
//         <div className={styles.gridItem2}>
//           {" "}
//           <Pane title="Pane 2" width="100%" height="100%" />
//         </div>
//         <div className={styles.gridItem3}>
//           {" "}
//           <Pane title="Pane 3" width="100%" height="100%" />
//         </div>
//         <div className={styles.gridItem4}>
//           {" "}
//           <Pane title="Pane 4" width="100%" height="100%" />
//         </div>
//       </div>
//     </main>
//   );
// }



// pages/page.js

// import React from 'react'; 
// import Pane from './Components/pane';
// import styles from './page.module.css';

// const Page = () => {
//   return (
    
//     <div className={styles.container}>
//       <Pane width="47%" height="42%"/>
//       <Pane width="47%" height="42%"/>
//       <Pane width="47%" height="42%"/>
//       <Pane width="47%" height="42%"/>
      
//     </div>
    
//   );
// };

// export default Page;



import Image from "next/image";
import styles from "./page.module.css";
import Pane from "./components/pane";
export default function Home() {
  return (
    <main className={styles.main}>
      <Pane width="45%" height="43%" />
      <Pane width="45%" height="43%"/>
      <Pane width="45%" height="43%"/>
      <Pane width="45%" height="43%"/>
      
    </main>
  );
}