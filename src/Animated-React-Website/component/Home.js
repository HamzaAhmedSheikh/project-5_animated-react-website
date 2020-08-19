import React from 'react'
import '../css/style.css'

export const Home = () => {
    return (
        <div>
          <section id="header">
            <div className="container">
              <div className="header-text">
                <h1> The purpose is to <br /> teach, bring learning to people </h1>  
                <span className="square"></span> 
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed efficitur mauris vel rhoncus maximus. Maecenas pretium nisl nulla, ac placerat metus rhoncus et.
                  Aliquam tincidunt venenatis enim, ut viverra sem sodales eu. Donec blandit faucibus enim tincidunt maximus. Ut mollis
                </p>
                <button className="commom-btn"> Read More </button>

                 <div className="line">
                    <span className="line-1"></span> <br />
                    <span className="line-2"></span> <br />
                    <span className="line-3"></span>
                 </div>

              </div>  
            </div>
          </section>
        </div>               
    )
}


export default Home;