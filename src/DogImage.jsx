// @ts-check
/**
 * @param {{ imageUrl: string }} props
 */
export const DogImage = ({imageUrl}) => {
  return <>
    <img src={imageUrl} alt="犬の画像" />
  </>
}

export default DogImage
