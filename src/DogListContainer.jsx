// @ts-check
import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {

  const [breeds, setBreeds] = useState(
    /** @type {string[]} */ ([])
  )
  const [imgList, setImgList] = useState(
    /** @type {string[]} */ ([])
  )
  const [selectedBreed, setSelectedBreed] = useState("")
  
  //　クリックイベント
  const btnClick = async () => {

    //  犬種が空のときはFetchしないようにする
    if (!selectedBreed) return

    const data = await fetchImgListUrl(selectedBreed)
    setImgList(data.message)
  }

  //　Fetchによるドロップダウンで選択した犬種の画像リスト取得
  /**
   * @param {string} selectedBreed
   */
  const fetchImgListUrl = async(selectedBreed) => {
    const apiurl = 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random/7'
    const response = await fetch(apiurl)
    if (!response.ok)
      throw new Error('fetch error')
    return response.json()
  }

  useEffect(() => {

    //　Fetchによる犬種リストの取得
    const fetchDogList = async() => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      if (!response.ok)
        throw new Error('fetch error')

      // 取得データから犬種名を取り出して状態変数にセット
      const data = await response.json()
      const breedList = Object.keys(data.message)
      setBreeds(breedList)

      // 最初の犬種を選択状態にする
      if (breedList.length > 0) {
        setSelectedBreed(breedList[0])
      }
    }

    //  取得処理の実行
    fetchDogList()
  }, [])

  return <>
    <div className="control">
      <BreedsSelect 
        breeds={breeds} 
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <button onClick={btnClick}>表示</button>
    </div>
    <div>
      { imgList.map((imgUrl, index) => (
        <img key={index} src={imgUrl} alt={selectedBreed} width="200" />
      ))}
    </div>
  </>
}

export default DogListContainer
