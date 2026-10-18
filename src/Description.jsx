// @ts-check
import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")
 
  //　クリックイベント
  const btnClick = async () => {
    const data = await fetchDogUrl()
    setDogUrl(data.message)
  }

  //　Fetchによる犬の画像取得
  const fetchDogUrl = async() => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    if (!response.ok)
      throw new Error('fetch error')
    return response.json()
  }

  return <>
    <p>犬の画像を表示するサイトです</p>
    <DogImage imageUrl={dogUrl}/>
    <button onClick={btnClick}>更新</button>
  </>
}

export default Description
