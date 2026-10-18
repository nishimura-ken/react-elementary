// DO NOT DELETE
import './App.css'
import Header from './Header'
import Description from './Description'
import DogListContainer from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <Description />
        <DogListContainer />
      </main>
    </div>
  )
}
