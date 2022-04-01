import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>Welcome to <span>Costs</span></h1>
      <p>Start to gerence your projects now way!</p>
      <LinkButton to="/newproject" text="Create Project"/>
      <img src={savings} alt="bgimage" />
    </section>
  );
};

export default Home;