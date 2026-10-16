// DO NOT DELETE
import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")
 
  const btnClick = () => {
    setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")
    console.log("onclick")
  }

  return (
    <div>
      <header>React.js初級編</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="犬の画像" />
      <button onClick={btnClick}>更新</button>
    </div>
  )
}
