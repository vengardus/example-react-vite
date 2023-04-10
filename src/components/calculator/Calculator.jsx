import { useState, useEffect, useRef } from "react"


export const Calculator = () => {
  const resultRef = useRef(null)
  const inputRef = useRef(null)
  const [result, setResult] = useState(0)

  const handleOption = (e, option) => {
    e.preventDefault()
    switch (option) {
      case 'add':
        setResult((x) => x + Number(inputRef.current.value))
        break
      case 'sub':
        setResult((x) => x - Number(inputRef.current.value))
        break
      case 'mul':
        setResult((x) => x * Number(inputRef.current.value))
        break
      case 'div':
        if (Number(inputRef.current.value) > 0)
          setResult((x) => x / Number(inputRef.current.value))
        break
      case 'resetInput':
        inputRef.current.value = 0
        break
      case 'resetResult':
        setResult(x => 0)
        break
    }
  }

  useEffect(() => {
    if (result < 0) console.log('Negativo')
  }, [result])


  return (
    <form>
      <h1 className="title">Simplest Working Calculator </h1>

      <div className="m-4">
        <div className="flex flex-col">
          <p ref={resultRef}>Result: {result}</p>

          <input
            className="input_number"
            pattern="[0-9]"
            placeholder="Type a number"
            ref={inputRef}
            type="number"
          />

          <div className="box">
            <button onClick={(e) => handleOption(e, 'add')} className="btn_option">Add</button>
            <button onClick={(e) => handleOption(e, 'sub')} className="btn_option">Sub</button>
            <button onClick={(e) => handleOption(e, 'mul')} className="btn_option">Mul</button>
            <button onClick={(e) => handleOption(e, 'div')} className="btn_option">Div</button>
            <button onClick={(e) => handleOption(e, 'resetInput')} className="btn_option">Reset Input</button>
            <button onClick={(e) => handleOption(e, 'resetResult')} className="btn_option">Reset Result</button>
          </div>
        </div>
      </div>

    </form>
  )
}
