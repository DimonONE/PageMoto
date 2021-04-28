import React, {useState} from "react"
import style from "./Contacts.module.css"
import { YouTel } from "../../../../../common/YouTel"

export const Contacts = (props) => {
    const [err, setErr] = useState(false)
    const [folow, setFolow] = useState(false)
    const onClick = (e) => {
        setFolow( !folow && true)
    }
    return(
            <section className="well-md well">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="number_section-var-4  number_section-var-2  number_section-var-1  relative">  <span className="counter"></span>
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
                                            <label onClick={onClick}  className={!folow ? style.mfSelect + " " + style.un_folow : style.mfSelect + " " + style.show + " " + style.folow}>
                                                <label className={`${style.swith_case}`}>новичок</label>
                                                <span className={style.value} ></span>
    
                                                <div className={style.dropdown}>
                                                    <p>водитель с опытом</p>
                                                    <p>профессионал</p>
                                                </div>
                                            </label>                               
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