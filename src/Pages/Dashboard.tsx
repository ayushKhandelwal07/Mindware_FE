import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../Config"

function Dashboard() {
  const [modalOpen , setModalOpen] = useState(false);
  const contents = useContent();


  return (
    <>
    <div>
    
    <Sidebar />
    
    <div className="p-4 ml-72 min-h-screen bg-gray-100 ">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false)
      }}/>

      <div className="p-4 gap-4 flex justify-end">
        <Button 
          onClick={async ()=> {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
              share : true 
            },{
              headers : {
                Authorization : localStorage.getItem("token")
              }
            });

            const shareUrl = `http://localhost:5173/share/${response.data.hash}`
            alert(shareUrl);          
            
          }}
          text="Share Brain" 
          varient="secondary" 
          startIcon={<ShareIcon />}/>
        <Button
          text="Add Content" 
          varient="primary" 
          onClick={() => {setModalOpen(true)}}    
          startIcon={<PlusIcon 
          />}/> 
      </div>
    
      <div className="flex gap-4">
        <Card type="twitter" link="https://x.com/kirat_tw/status/1883972854481576211" title="motivation"/>
        <Card type="youtube" link="https://www.youtube.com/watch?v=PT2_F-1esPk&ab_channel=ChainsmokersVEVO" title="Youtube video"/>
      </div>

      <div className="flex gap-4 flex-wrap">

          {contents.map(({title, link, type}) => (
           <Card 
            title={title}
            link={link}
            type={type}
            key={link}
           />
          ))}

      </div>


    
    </div>
  </div>
    </>
  )
}

export default Dashboard
