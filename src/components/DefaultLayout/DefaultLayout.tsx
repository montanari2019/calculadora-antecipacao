import { Outlet } from "react-router-dom"
import { Carrosel } from "../Carrosel/Carrosel"
import { Header } from "../Header/Header"
import { ContianerDefaultLayout } from "./styled"



export function DefaultLayout(){
    return(

        <div>

<ContianerDefaultLayout>

            <Header/>

        </ContianerDefaultLayout>
            <Carrosel/>
        <ContianerDefaultLayout>
            <Outlet/>

        </ContianerDefaultLayout>
        </div>
    )
}