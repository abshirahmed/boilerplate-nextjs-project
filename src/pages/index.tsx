import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import HelloWorld from '../components/HelloWorld/HelloWorld';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HelloWorld />
    </div>
  );
};

export default Home;
