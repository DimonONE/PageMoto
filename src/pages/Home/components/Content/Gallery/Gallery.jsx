import React, { useState } from "react"
import style from "./Gallery.module.css"
import { gallery } from "../../../../../Data/Store"
import { Fade } from "react-awesome-reveal";


const FullImg = (props) => {
    let [idImgs, setIdImgs] = useState(props.idOriginal)
    const endImgs = gallery.Gallery.length

    const visibleScroll = () => {
        props.setFullIMG(false)
        document.body.style.overflow = "visible"
    }

    const imgLeft = () => {
        setIdImgs(idImgs <= 1 ? endImgs : --idImgs)
    }
    
    const imgRigt = () => {
        setIdImgs(idImgs >= endImgs ? 1 : ++idImgs)
    }

    document.body.style.overflow = "hidden"
    return <div className={style.window__full_img}>
                <div className={ style.gallery + " " + style.conttainer_img}>
                    <div className={style.cancel}>
                        <button className={`${style.exit_img} mfp-close`} title="Close (Esc)" onClick={visibleScroll} >×</button>
                    </div>
                    <button onClick={imgLeft} title="Previous (Left arrow key)" type="button" className="mfp-arrow mfp-arrow-left mfp-prevent-close"/>
                        {gallery.Gallery.map((e) => <span key={e.id} onClick={imgRigt}> {idImgs === e.id && <img src={e.img} alt=""/>} </span> ) }
                    <button onClick={ imgRigt }  title="Previous (Left arrow key)" type="button" className="mfp-arrow mfp-arrow-right mfp-prevent-close"/>
                </div>
            </div>
}

const Photos = (props) => {
    const onClick = () => {
        props.setFullIMG(true)
        props.setIdOriginal(props.id)
    }
    return(<>
            <div className="col-md-4">
                <Fade direction={props.id === 1 ? "left" : props.id === 3 &&  "right"}>
                    <div className="thumb wow fadeInLeft">
                            <span className={style.gallery} onClick={onClick}>
                                <img className={style.lonk_photo} src={props.imgFixed} width="683" height="399" alt=""/>
                                <div className="thumb__overlay"></div>
                            </span>
                    </div>
                </Fade>
            </div> 
          </>
    )
}

export const Gallery = (props) => {
    const [fullIMG, setFullIMG] = useState(false)
    let [idOriginal , setIdOriginal] = useState(0)
    return(
        <>
            <div className="row row-no-gutter gallery">
                {gallery.Gallery.map( (e) => <Photos key={e.id} {...e} 
                 setIdOriginal={setIdOriginal} setFullIMG={setFullIMG}/>)}
            </div>
            <div className={fullIMG ? style.full_window : undefined}>
                    {fullIMG && <FullImg idOriginal={idOriginal} setFullIMG={setFullIMG}/>}    
            </div>
        </>
    )
}




     