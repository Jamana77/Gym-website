import React from 'react'
import '../../styles/start.css'
import trainerImg from '../../assets/img/trainer.png'
const Start = () => {
  return (
    <section id="classes">
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={trainerImg} alt="" data-aos="fade-left" data-aos-duration="1500"/>
                </div>
                <div className="start__content" data-aos="fade-right" data-aos-duration="1500">
                    <h2 className="section__titile">
                        Ready to make a <span className="highlights">change?</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem voluptates illum, totam molestias, ipsa sunt perferendis ad nisi tempora, culpa deleniti. Rem repellendus voluptate magni laboriosam quaerat reiciendis nisi.</p>
                    <button className="register__btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start