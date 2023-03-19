import { useState  } from "react"


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
