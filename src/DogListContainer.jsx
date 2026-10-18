// @ts-check
import { useState, useEffect } from 'react' 

export const DogListContainer = () => {

  const [breeds, setBreeds] = useState(
    /** @type {string[]} */ ([])
  ) 

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
    }

    //  取得処理の実行
    fetchDogList()
  }, [])

  return <>
   <select>
      { breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      )) }
    </select>
  </>
}

export default DogListContainer
