import React from 'react';
import "./Contract.css"
import { useForm, ValidationError } from '@formspree/react';

console.log(ValidationError)


const Contract = () => {

  const [state, handleSubmit] = useForm({})

  return (



    <div className="bg-contact100 pt-5" >

      <div className="container-contact100 pt-5">
        <div className="wrap-contact100">
          <div className="contact100-pic js-tilt" data-tilt>
            <img src="https://i.ibb.co/qns6Xjq/img-01.png" alt="IMG" />
          </div>

          {state.submitting ? <>

            <h4 className="sayThanks">Thanks to contract with Us. We will contract you as soon as possible</h4>

          </>
            : <>

              <form method="POST" action="https://formspree.io/f/xbjqdobp" onSubmit={handleSubmit} className="contact100-form validate-form" >
                <h2 className="contact100-form-title">
                  Get in touch
    			</h2>

                <div className="wrap-input100 validate-input" data-validate="Name is required">

                  <input className="input100" id="name" type="text" name="name" placeholder="Name" required />

                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </div>
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />


                <div className="wrap-input100 validate-input" >

                  <input className="input100" id="email" type="email" name="email" required placeholder="Email" />


                  < span className="focus-input100" ></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>

                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />


                <div className="wrap-input100 validate-input" data-validate="Message is required">
                  <textarea className="input100" id="message" name="message" required placeholder="Message" />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <span className="focus-input100"></span>
                </div>

                <div className="container-contact100-form-btn">
                  <button type="submit" className="contact100-form-btn">
                    Send
    				</button>
                </div>
              </form>




            </>

          }
        </div>
      </div>
    </div >

  )
};

export default Contract;