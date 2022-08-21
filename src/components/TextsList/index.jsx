import { useState } from "react"
import { AddNewTextSection } from "./AddNewTextSection"
import { List } from "./List"


export const TextsList = ()=>{
    const [textData,setTextData] = useState(['Arpi','Ashot'])

    return (
        <div>
            <AddNewTextSection setTextData={setTextData}/>
            <List textData={textData} setTextData={setTextData}/>
        </div>
    )
}



