import { useState } from 'react'

export default function HomeComponent () {
  const [text, setText] = useState('')
  const [countWords, setCountWords] = useState(0)
  const [countChars, setCountChars] = useState(0)

  // buttonArray will contain All kind of buttons that we are using to manipulate Input Text.
  const buttonArray = [
    { id: 1, value: "Upper Case" },
    { id: 2, value: "Lower Case" },
    { id: 3, value: "Copy" },
    { id: 4, value: "Remove Extra Spaces" },
    { id: 5, value: "Clear" },
    { id: 6, value: "Camel Case" },
    { id: 7, value: "Snake Case" }
  ]
  //handleOnChange will handle the text Entered by user
  const handleOnChange = (event) => {
    //setting the state
    setText(event.target.value)
    //setting character count
    setCountChars(event.target.value.length)
    //setting word count
    setCountWords((event.target.value.split(' ').filter(el => el.length!==0).length))
  }
  //handleUppercase will convert the text to upperCase when someone clicked on upperCase button.
  const handleUpperCase = () => {
    setText(text.toUpperCase())
  }
  //handleLowerCase will convert the text to lowerCase when someone clicked on lowerCase button.
  const handleLowerCase = () => {
    setText(text.toLowerCase())
  }
  //copyToClipboard will copy the current text to clipboard when someone clicked on copy button
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  }
  // removeExtraSpaces will remove the extra spaces in between the text when someone clicked on "Remove Extra spaces" button
  const removeExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(' '))
  }
  //clear will clear the text area when someone clicked on clear button
  const clear = () => {
    setText('')
  }
  //camelCase will convert the text to camelCase when someone clicked camelCase button
  const camelCase = () => {
    let arr = text.split(' ')
    let camelCaseString = arr.map((el) => {
      return el[0].toUpperCase() + el.substring(1)
    }).join(' ')
    setText(camelCaseString)
  }
  //snakeCase will convert the text to snake case when someone clicked on snakeCase button
  const snakeCase = () => {
    let snakeCaseString = text.split(' ').join('_')
    setText(snakeCaseString)
  }
  //handleOnclick will handle then click event whenever any button is clicked, then actions will performed according to the button
  const handleOnClick = (event) => {
    let value = event.target.value
    switch (value) {
      case 'Upper Case':
        handleUpperCase()
        break;
      case 'Lower Case':
        handleLowerCase()
        break;
      case 'Copy':
        copyToClipboard()
        break;
      case 'Remove Extra Spaces':
        removeExtraSpaces()
        break;
      case 'Clear':
        clear()
        break;
      case 'Camel Case':
        camelCase()
        break;
      case 'Snake Case':
        snakeCase()
        break;
    }
  }
  return (
    <>
      <div className="container  w-70 py-4 sm:w-full" >
        <h1 className='mb-4 text-center fw-bolder'>Welcome to Text Analyzer</h1>
        <div>
          <p className='fw-bold'>{countChars ? "Total Characters : " + countChars : null} </p>
          <p className='fw-bold'>{countWords ? "Total Words : " + countWords : null} </p>
        </div>
        <div className="mb-3">
          <textarea className="form-control rounded-0" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <div className='button_container flex flex-wrap'>
          {buttonArray.map((element) => (
            <button disabled={text.length === 0} onClick={handleOnClick} key={element.id} value={element.value} className='btn btn-primary m-2'>{element.value}</button>
          ))}
        </div>

      </div>
    </>
  )
}