import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
    <Button text="Add " varient="primary" startIcon={<PlusIcon />}/> 
    <Button text="Share" varient="secondary"  startIcon={<ShareIcon />}/>
    <Card type="twitter" link="https://x.com/kirat_tw/status/1883972854481576211" title="motivation"/>
    <Card type="youtube" link="https://www.youtube.com/watch?v=PT2_F-1esPk&ab_channel=ChainsmokersVEVO" title="omg.."/>

    </>
  )
}

export default App
