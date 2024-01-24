import Image from "next/image";
import Pane from "./Components/pane"
import styles from "./page.module.css"

function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      <div className={styles.container}>
      <Pane width="40%" height="45%"/>
      <Pane width="40%" height="45%"/>
      <Pane width="40%" height="45%"/>
      <Pane width="40%" height="45%"/>
      
      </div>
      
  
  );
}

export default Home;
