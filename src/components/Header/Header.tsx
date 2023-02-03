import {ContianerHeader, DisplayHeaderLogo, LogoProd, TitleHeader } from "./styled";
import logo from "../../assets/prodLogo.svg"
export function Header() {
    return (
        <ContianerHeader>
            <DisplayHeaderLogo>
                <LogoProd src={logo} alt="" />
                <TitleHeader>Calculadora de antecipação</TitleHeader>
            </DisplayHeaderLogo>


           
        </ContianerHeader>
    )
}