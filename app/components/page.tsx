import styles from './style.module.css'
import PowerBy from '@/components/power-by'
const Home = () => {
  return <main className={styles.container}>
    <h1>Components</h1>
    <div>
      <h2>Power By</h2>
      <PowerBy />
    </div>

    <div>
      <h2>Button</h2>
    </div>

    <div>
      <h2>Input</h2>
    </div>

    <div>
      <h2>Chat Bubble</h2>
    </div>

    <div>Select</div>
  </main>
}

export default Home
