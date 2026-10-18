// @ts-check
import { useState } from 'react'
/**
 * @param {{ 
 *  breeds: string[],
 *  selectedBreed: string,
 *  setSelectedBreed: (breed: string) => void
 * }} props
 */

export const BreedsSelect = ({breeds, selectedBreed, setSelectedBreed}) => {

  /**
  * @param {import('react').ChangeEvent<HTMLSelectElement>} e
  */
  const breedChange = (e) => {
    setSelectedBreed(e.target.value)
  }

  return <>
    <select onChange={breedChange} value={selectedBreed}>
      { breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      )) }
    </select>
  </>
}

export default BreedsSelect
