import React, { useState, useRef } from 'react'
import "./App.css"
import AppButton from "./component/AppButton"


const App = () => {
  const [timer, setTimer] = useState(0)
  const [flag, setFlag] = useState(true)
  const [record, setRecord] = useState<string[]>([])

  const countRef = useRef<any>(null)

  const onStartOrStop = () => {
    if (flag) {
      console.log("start")

      countRef.current =  setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
      setFlag(false)
    } else {
      console.log("stop")
      setFlag(true)

      clearInterval(countRef.current)
      setTimer(timer)
    }
  }

  const onReset = () => {
    setTimer(0)
  }

  

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${parseInt(minutes) % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  const onLap = () => {
    const copy = record.concat(formatTime())

    setRecord([...copy])
    console.log(record)
  }

  return (
    <div className="root">
      <header>
        <h1>Simple StopWatch App</h1>
      </header>
      <p> { formatTime() } </p>
      <div className="button_wrapper">
        <AppButton onClick={ onStartOrStop } title={flag ? "START": "STOP"} enabled={ false }/>
        <AppButton onClick={ onReset } title="RESET" enabled={ flag } />
        <AppButton onClick={ onLap } title="LAP" enabled={ flag }/>
      </div>

      <div>
        <ul>
          {
            record.map((val, index) => {
              return <li key={index}> {val}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
