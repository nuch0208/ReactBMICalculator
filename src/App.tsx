import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  // const heightRef = useRef<HTMLInputElement>(null)
  // const weightRef = useRef<HTMLInputElement>(null)


  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target

    if (name === 'weight') {
      setWeight(Number(value))
    } else if (name === 'height'){
      setHeight(Number(value))
    }

  }

  const calculateBmi = () => {

  const bmi = weight / (height / 100) **2
  setBmi(bmi)

  console.log('weight',weight)
  console.log('height',height)
  console.log('bmi', bmi)
  }

  const checkBmiResult = () => {
    if (bmi === 0) return '-'
    if (bmi < 18.5) return 'อยู่ในเกณฑ์น้ำหนักน้อยหรือผอม'
    if (bmi < 25) return 'อยู่ในเกณฑ์ปกติ (สุขภาพดี)'
    if (bmi < 30) return 'อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 1'
    if (bmi < 35) return 'อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 2'
    if (bmi >= 35) return 'อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 3'
    return <span>Todo</span>
  }
    const getResultClass = () => {
      if (bmi < 18.5) return 'gray'
      if (bmi < 22.9) return 'green'
      if (bmi < 24.9) return 'yellow'
      return 'red'
    }

  return (
    <>
      
      <h1>BMI Calculator</h1>
      <p>โปรแกรมคำนวณค่าดัชนีมวลกาย</p>
      
      <label htmlFor="weight">น้ำหนัก (kg)</label>
      <input type="number" name="weight" onChange={handleOnChange}/>

      <label htmlFor="height">ส่วนสูง (cm)</label>
      <input type="number" name="height" onChange={handleOnChange} />

      <button type="button" onClick={calculateBmi}>
        คำนวณ
      </button>
      <hr />

  

      <div className="result">
        <p> ค่า BMI คือ : {bmi.toFixed(2)} </p>
        <p> ผลลัพธ์ </p>
        <p className={getResultClass()}> {checkBmiResult()} </p>
      </div>

      
    </>
  )
}

export default App
