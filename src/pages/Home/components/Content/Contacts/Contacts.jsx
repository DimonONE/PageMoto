import React, {useState} from "react"
import style from "./Contacts.module.css"
import { YouTel } from "../../../../../common/YouTel"

export const Contacts = (props) => {
    const [err, setErr] = useState(false)
    const [folow, setFolow] = useState(false)
    let [experience, setExperience] = useState("новичёк")
    let [v2, setV2] = useState("водитель с опытом")
    let [v3, setV3] = useState("профессионал")
    const isFollow = () => {
        setFolow( !folow && true)
    }

    const setValueCase = (v) => {
        function swap(a, b) {
            return [b, a]
        }
        switch(v) {
            case "новичёк": {
                [experience, v2] = swap(experience, v2);
               return (setExperience(experience), setV2(v2))
            } 
            case "водитель с опытом": {
                [experience, v2] = swap(experience, v2);
                return (setExperience(experience), setV2(v2))
            } 
            case "профессионал": {
                [experience, v3] = swap(experience, v3);
                return (setExperience(experience), setV3(v3))
            }
            default: return v
        }
    }

    return(
            <section className="well-md well">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="number_section-var-4  number_section-var-2  number_section-var-1  relative"> <span className="counter"></span>
                                <div className="number_section text-lg-left text-center"><h4>Контакты:</h4>
                                    {/* <!-- <h3> & location</h3> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-left text-center offset-5">
                            <h3>Оставить заявку</h3>
                            {/* <!-- RD Mailform --> */}
                            <form className='rd-mailform offset-4' method="post" action="bat/rd-mailform.php">
                                {/* <!-- RD Mailform Type --> */}
                                <input type="hidden" name="form-type" value="contact"/>
                                {/* <!-- END RD Mailform Type --> */}
                                <fieldset>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label data-add-placeholder>
                                            <YouTel err={err} setErr={setErr} placeholder={"Ваш телефон"} />
                                            </label>
                                        </div>
                                        <div className="col-sm-6">
                                            <span onClick={isFollow} className={!folow ? style.mfSelect + " " + style.un_folow : style.mfSelect + " " + style.show + " " + style.folow}>
                                                <label className={style.swith_case}> {experience} </label>
                                                <span className={style.value}></span>
                                                <span className={style.dropdown_container}>
                                                    <div className={style.dropdown}>
                                                        <p className={style.dropdown_value} onClick={() => setValueCase(experience)}>{v2}</p>
                                                        <p className={style.dropdown_value}onClick={() => setValueCase("профессионал")}>{v3}</p>
                                                    </div>    
                                                </span>
                                            </span>                               
                                        </div>
                                    </div>
                                    <div className="mfControls text-center text-md-left btn-contact">
                                        <button disabled={err} className="btn btn-lg btn-primary" type="submit">Отправить</button>
                                    </div>
                                    <div className="mfInfo"></div>
                                </fieldset>
                            </form>
                            {/* <!-- END RD Mailform --> */}
                        </div>
                    </div>
                </div>
            </section>
    )
}