import React from "react"
import style from "./Home.module.css"
import { Content } from "./components/Content/Content"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"

export const HomePage = (props) => {
    return(
        <div className={style.home} id="home_page">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}