import styles from './style.module.css'
import PowerBy from '@/components/power-by'
import Button from '@/components/button'
import AcademicCap from '@heroicons/react/24/solid/AcademicCapIcon'
const Home = () => {
  return <main className={styles.container}>
    <h1>Components</h1>
    <div>
      <h2>Power By</h2>
      <PowerBy />
    </div>

    <div>
      <h2>Button</h2>
      <Button text="Blue" type='blue' className='mr-2'/>
      <Button text="Red" type='red' className='mr-2'/>
      <Button text="Gray" type='gray' className='mr-2'/>
      <Button text="White" type='white' className='mr-2'/>
      <Button text="Blue" type='blue' className='mr-2'>
        <AcademicCap className="h-4 w-4 text-white mr-2" />
        Hello Cap
      </Button>
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
