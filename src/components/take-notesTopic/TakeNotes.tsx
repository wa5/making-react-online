import { useState } from "react"
import { students,allNotes } from "take-notes"
import { MyNotesCard } from "../cards/MyNotesCard"

export const TakeNotes:React.FC<{}>=()=>{

console.log()
let [allData,setAllData]=useState(allNotes.all())
    return <>
    download pdfs
    {allData.map((val:any)=>{
        return <MyNotesCard fileLink={val.
            fileUrl} language={val.language} name={val.
                studentName
            } topic={val.topic}/>
    })}
    </>
}