import styles from '../styles/Home.module.css';
import HelloWorld from '../components/HelloWorld/HelloWorld';

const Home = () => {
  return (
    <div className={styles.container}>
      <HelloWorld />
    </div>
  );
};

export default Home;
