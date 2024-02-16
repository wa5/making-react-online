import { Box, Tab } from "@mui/material"
import { NamingConvention } from "../../components/NamingConvention/NamingConvention"
import { ExternalCss } from "../../components/css/ExternalCss"
import { InlineCss } from "../../components/css/InlineCss"
import { InpageCss } from "../../components/css/InpageCss"
import { MyFragment } from "../../components/fragment/MyFragment"
import { MyUseStateHook } from "../../components/hooks/MyUseStateHook"
import { MyStarRating } from "../../components/mui/MyStarRating"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import { MyImage } from "../../components/myImage/MyImage"
import { MyCards } from "../../components/mui/MyCards"
import { CardConatiner } from "../../components/cards/CardConatiner"
import { MyProps } from "../../components/props/MyProps"
import { Sharing } from "../../components/sharing/Sharing"
import { ApiCaller } from "../../components/apiCaller/ApiCaller"
import { TakeNotes } from "../../components/take-notesTopic/TakeNotes"

export const AllLessons: React.FC<{}> = () => {
    let [number, setNumber] = useState('1')
    return <>
        <h1>all lessons</h1>
        <Box>
            <TabContext value={number}>
                <TabList onChange={(e, num) => { setNumber(num) }}>
                <Tab label="take notes" value="9"/>
                    <Tab label={"useStae"} value={"1"} />
                    <Tab label={"naming conention"} value={"2"} />
                    <Tab label={"fragmet"} value={"3"} />
                    <Tab label={"types of css"} value="4" />
                    <Tab label={"mui"} value="5" />
                    <Tab label="props" value={"6"}/>
                    <Tab label="Sharing" value={"7"}/>
                    <Tab label="Api concept useEffect" value="8"/>
                   
                    
                </TabList>
                <TabPanel value="1">
                    <MyUseStateHook />
                </TabPanel>
                <TabPanel value="2">
                    <NamingConvention />
                </TabPanel>
                <TabPanel value="3">

                    <MyFragment />
                </TabPanel>
                <TabPanel value="4">
                    <ExternalCss />
                    < InlineCss />
                    <InpageCss />
                </TabPanel>
                <TabPanel value="5">
                  <MyStarRating/>  
                </TabPanel>
                <TabPanel  value="6">
                    <MyProps/>
                    <CardConatiner/>
                    <MyImage/>
                    {/* <MyImage/>

                    <MyImage/>l
                    <MyImage/>
                    <MyImage/>
                    <MyImage/>
                    <MyImage/>
                    <MyImage/>
                    <MyImage/>
                    <MyImage/> */}
                </TabPanel>
                <TabPanel value="7"> 
                    <Sharing/>
                </TabPanel>
                <TabPanel value="8">
                    <ApiCaller/>
                </TabPanel>
                <TabPanel value="9">
<TakeNotes/>
                </TabPanel>
            </TabContext>
        </Box>
    </>
}