import './App.css'

import { Button } from './stories/Button'

const App = () => {
  return (
    <>
      <Button
        primary={true}
        size='medium'
        backgroundColor='blue'
        label='Hola'
      />
    </>
  )
}

export default App
