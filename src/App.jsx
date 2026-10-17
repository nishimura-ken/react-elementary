// DO NOT DELETE
import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")
 
  //　クリックイベント
  const btnClick = async () => {
    const dogurl = await fetchDogUrl()
    setDogUrl(dogurl.message)
    console.log(dogurl.message)
  }

  //　Fetchによる犬の画像取得
  const fetchDogUrl = async() => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    if (!response.ok)
      throw new Error('fetch error')
    return response.json()
  }

  return (
    <div>
      <header className='header'>React.js初級編</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="犬の画像" />
      <button onClick={btnClick}>更新</button>
    </div>
  )
}
