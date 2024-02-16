import { something } from "./external"
import './external.css'
export const ExternalCss:React.FC<{}>=()=>{
    return <>
    
    <h1 style={something}>im external css</h1>
    <h2 className="abcd">hghghg</h2>
    </>
}