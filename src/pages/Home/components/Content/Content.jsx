import React, {useState} from "react"
import { NavLink } from "react-router-dom"
import { YouTel } from "../../../../common/YouTel"

import page1_img_06 from "../../../../images/page1-img_06.jpg"
import page1_img_07 from "../../../../images/page1-img_07.jpg"
import { Gallery } from "./Gallery/Gallery"

export const Content = (props) => {
    const [values, setValue] = useState('')
    const onChange = (event) => {
        setValue(event.target.value)
    }
    const [folow, setFolow] = useState(false)
    return(
        <main className="page-content">
        {/* <!-- Welcome --> */}
        <section className="well-xl bg-color-1 well-sm">
                <div className="container text-center relative">
                <span className="counter"></span>
                <div className="number_section edit_fonts"><h4>Добро пожаловать</h4>
                <h3 className="edit_fonts">в мотошколу в Ростове-на-Дону!</h3>
                </div>
                <p>Мы предлагаем профессиональное обучение езде на мотоцикле. С тебя — желание учиться, а с нас — опытные инструкторы, личный мотоцикл, площадка для обучения и безопасное вождение.</p>
                    <p>Обучение в школе доступно для профи и начинающих водителей. Мы делаем упор на практику, поэтому вы быстро станете уверенным водителем.</p>
                    <p>Опытных мотоциклистов мы обучим стантрайдингу — трюковой езде. Вилли, дрифт, стоппи, бернаут — смело открывайте для себя современное искусство управления мотоциклом! </p>
            </div>
        </section>
        {/* <!-- END Welcom--> */}
        {/* <!-- Gallery --> */}
        <section className="bg-image">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-4">
                      <div className="number_section-var-1 relative text-center">  <span className="counter"></span>
                        <div className="number_section text-center"><h4>Галерея</h4>
                            {/* <!-- <h3> photo gallery</h3> --> */}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        <div data-lightbox="gallery" className="offset-2">
            <Gallery />
        </div>
        {/* <!-- END Gallery--> */}
        
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    {/* <!-- Most popular --> */}
                    <section className="well-lg well-lg-var-1 well">
                        <div className="number_section-var-2 number_section-var-1 relative"> 
                            <span className="counter"></span>
                            <div className="number_section text-lg-left text-center"><h4>Наше оборудование</h4>
                                {/* <!-- <h3>Современные мотоциклы</h3> --> */}
                                <p>Мы предоставляем современные и удобные мотоциклы на все занятия без лишних доплат, а также защитную экипировку — шлем, черепаху, перчатки, наколенники.</p>
                            </div>
                        </div>

                        <div className="text-center text-lg-left">
                            <img src={page1_img_06} width="557" height="314" alt="" />
                            <h3 className="text-uppercase">Suzuki</h3>
                            <h6 className="offset-3"> 2016 GSX R1000 Concept</h6>
                            <NavLink to="#" className="btn btn-primary btn-lg">read review</NavLink>
                            <img src={page1_img_07} width="557" height="314" alt="" />
                            <h3 className="text-uppercase">Suzuki</h3>
                            <h6 className="offset-3"> 2016 Hayabusa ABS Z</h6>
                            <NavLink to="#" className="btn btn-primary btn-lg">read review</NavLink>
                        </div>
                    </section>
                    {/* <!-- END Most popular--> */}
                </div>
                <div className="col-sm-6 bg-color-2 ">
                    {/* <!-- Club fresh --> */}
                    <section className="well-lg well-lg-var-1 well">
                        <div className="number_section-var-2  number_section-var-3  relative">  <span className="counter"></span>
                            <div className="number_section text-lg-left bg-primary text-center"><h4>Наши преимущества</h4>
                                {/* <!-- <h3>news & events</h3> --> */}
                        <p>1. Обучение безопасному вождению мотоцикла в условиях городской среды.</p>
                        <p>2. Опытные инструкторы со стажем вождения от 5 лет и выше.</p>
                        <p>3. Индивидуальный подход и персональная программа тренировок для каждого.</p>
                            </div>
                        </div>
                      
                    </section>
                    {/* <!-- END Club fresh--> */}
                </div>
            </div>
        </div>
        {/* <!-- Rider School --> */}
        <section className="bg-image-1 well-xl-1">
            <div className="container">
                <h2 className="text-uppercase text-bold"> Оставьте заявку и получите <span className="text-primary">10 занятий</span> по специальной цене!</h2>
                <h4 className="text-white"> <strike>25000руб.</strike> 10000 руб</h4>
                <NavLink to="#" className="btn btn-primary btn-lg">Получить</NavLink>
            </div>
        </section>
        {/* <!-- END Rider School --> */}
        {/* <!-- Club Nutritionist --> */}
        <section className="well-xl well-xl-var-1 bg-color-1 well">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <span className=" cars car-repire-icon-05 "></span>
                        <h4 className="text-bold"><NavLink to="#">любой уровень</NavLink></h4>
                         <p className="inset-2">Нам не важно как хорошо и как долго ты ездишь, мы все равно повысим твой скилл</p> 
                    </div>
                    <div className="col-md-4">
                        <span className=" cars car-repire-icon-40 "></span>
                        <h4 className="text-bold"><NavLink to="#">езда в городе</NavLink></h4>
                         <p>У нас ученики катаются не только по площадке. Ты поездишь по городу с инструктором</p> 
                    </div>
                    <div className="col-md-4">
                        <span className=" cars car-repire-icon-50 "></span>
                        <h4 className="text-bold"><NavLink to="#">стантрайдинг</NavLink></h4>
                        <p> Если тебе уже скучно просто перемещаться  на байке мы научим тебя делать это эффектно!</p> 
                    </div>
                    <div className="col-md-4">
                        <span className=" cars car-repire-icon-05 "></span>
                        <h4><NavLink to="#"><p className="text-bold">личный</p> <p className="text-bold">инструктор</p>  </NavLink></h4>
                         <p className="inset-2">У  вас будет собственный наставник с большим опытом езды на байке</p> 
                    </div>
                    <div className="col-md-4">
                        <span className=" cars car-repire-icon-40 "></span>
                        <h4 className="text-bold"><NavLink to="#">сопровождение на треке</NavLink></h4>
                         <p>Наши инструктора помогут вам выжать максимум из вашего железного коня</p> 
                    </div>
                    <div className="col-md-4">
                        <span className=" cars car-repire-icon-50 "></span>
                        <h4 className="text-bold"><NavLink to="#">индивидуальный график обучения</NavLink></h4>
                        <p>Не вам придется под нас подстраиваться а мы подстроимся под вас</p> 
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- END Club Nutritionist--> */}
        {/* <!-- Contacts --> */}
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
                                            <YouTel value={values} onChange={onChange} placeholder={"Ваш телефон"} />
                                        </label>
                                    </div>
                                    <div className="col-sm-6">
                                        <label onClick={() =>  setFolow( !folow && true)} data-add-placeholder className={folow ? "mfSelect" : "mfSelect show focus"}>
                                            <select name="message" className="shadow" data-constraints="@NotEmpty" >
                                                <option value="новичок">новичок</option>
                                                <option value="водитель с опытом">водитель с опытом</option>
                                                <option value="профессионал">профессионал</option>
                                            </select>
                                            <span className="mfValidation"></span>
                                            <div className="value"></div>
                                            <ul className="dropdown"></ul>
                                            <span className="mfPlaceHolder"></span>
                                        </label>                               
                                    </div>
                                </div>
                                <div className="mfControls text-center text-md-left btn-contact">
                                    <button className="btn btn-lg btn-primary" type="submit">Отправить</button>
                                </div>
                                <div className="mfInfo"></div>
                            </fieldset>
                        </form>
                        {/* <!-- END RD Mailform --> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- END Contacts--> */}
    </main>
    )
}