import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { YouTel } from "../../../../common/YouTel";

export const Header = (props) => {
    const [values, setValue] = useState('')
    const onChange = (event) => {
        setValue(event.target.value)
    }

    return(
    <header className="page-header">
        <div className="container text-center text-md-left">
            <div className="row">
                <div className="col-md-3">
                    <ul className="inline-list">
                        <li><NavLink to="#" className="icon-lg fl-glypho-facebook2"></NavLink></li>
                        <li><NavLink to="#" className="icon-lg fl-glypho-twitter"></NavLink></li>
                        <li><NavLink to="#" className="icon-lg fl-glypho-google-plus"></NavLink></li>
                        <li><NavLink to="#" className="icon-lg fl-glypho-instagram19 "></NavLink></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-lg-preffix-5 col-md-4 col-md-preffix-3 col-sm-6 col-sm-preffix-6">
                    <div className="brand">
                        <NavLink to="/home"><span className="brand_name edit_fonts">Moto</span>
                        <span className="brand_slogan edit_fonts">Racing Club</span></NavLink>
                    </div>
                      <h3 className="offset-1 width-h3 edit_fonts">Мотошкола в Ростове-на-Дону</h3>
                      <h6 className="edit_fonts">Мечтаешь научиться ездить на мотоцикле, освоить трюки и экстремальное вождение? Хватит откладывать на потом! Приходи в мотошколу в Ростове-на-Дону.</h6>
  
                      {/* <!-- RD Mailform --> */}
                      <form className='rd-mailform' method="post" action="bat/rd-mailform.php">
                          {/* <!-- RD Mailform Type --> */}
                          <input type="hidden" name="subscribe" value="contact"/>
                          {/* <!-- END RD Mailform Type --> */}
                          <fieldset>
                              <label data-add-placeholder>
                              <YouTel value={values} onChange={onChange} placeholder={"+7 (999) 99-99-99"} />
                              </label>
                              <div className="mfControls text-center text-md-left">
                                  <button className="btn btn-lg btn-primary text-uppercase" type="submit">Получить консультацию</button>
                              </div>
                              <div className="mfInfo"></div>
                          </fieldset>
                      </form>
                      {/* <!-- END RD Mailform --> */}
                  </div>
              </div>
          </div>

      </header>
    )
  }