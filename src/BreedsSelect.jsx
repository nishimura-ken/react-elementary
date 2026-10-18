// @ts-check
import { useState } from 'react'
/**
 * @param {{ breeds: string[] }} props
 */
export const BreedsSelect = ({breeds}) => {

  const [selectedBreed, setSelectedBreed] = useState("")

  /**
  * @param {import('react').ChangeEvent<HTMLSelectElement>} e
  */
  const breedChange = (e) => {
    setSelectedBreed(e.target.value)
  }

  return <>
    <select onChange={breedChange}>
      { breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      )) }
    </select>
    { selectedBreed && <div>{selectedBreed}</div>}
  </>
}

export default BreedsSelect
