import { FormEvent, useCallback, useState } from 'react';
import { Typography } from '@mui/material';

import { useTimer } from './hooks/useTimer';
import { renderFullTime } from './helpers/time';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Container, Timer } from './App.styles';
import List from './List';
import { ItemList } from './App.types';

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState<ItemList[]>([])

  const {
    minutes,
    running,
    time,
    reset,
    seconds,
    start,
    continueCount,
    stop,
  } = useTimer();

  const fullTime = renderFullTime(minutes, seconds)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setList(prev => [...prev,  {name, time: fullTime}])
    setName('')
    stop()
  }

  const handleDeleteItem = useCallback((index: number) => {
    setList(prev => prev.filter((_, i) => i !== index))
  }, [setList]);

  return (
    <Container>
      <Typography variant="h3">
        Daily Counter
      </Typography>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          label="Name"
          variant="outlined"
        />
        <Button type="submit" variant="outlined" disabled={!name || time === 0}>Submit</Button>
      </form>
      <Timer>
        <Typography variant="h1">{fullTime}</Typography>
        <div className="timer-actions-buttons">
          {time === 0 && !running ?
            <Button onClick={start} disabled={!name} variant="contained">start</Button>
            :
            <Button onClick={continueCount} variant="contained">{running ? "pause" : "continue"}</Button>
          }
          <Button onClick={reset} variant="contained" color="error" >reset</Button>
        </div>
      </Timer>
      <List list={list} onDeleteClick={handleDeleteItem} />
    </Container>
  )
}

export default App
