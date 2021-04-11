import React from 'react';
import { useForm } from 'react-hook-form';
import "./Contract.css"




const Contract = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);


  return (

    // <form onSubmit={handleSubmit(onSubmit)}>

    //   <input name="example" defaultValue="test" ref={register} />


    //   <input name="exampleRequired" ref={register({ required: true })} />


    //   <input type="submit" />
    // </form>

    <div className="bg-contact100 pt-5" >

      <div className="container-contact100 pt-5">
        <div className="wrap-contact100">
          <div className="contact100-pic js-tilt" data-tilt>
            <img src="https://i.ibb.co/qns6Xjq/img-01.png" alt="IMG" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="contact100-form validate-form" >
            <h2 className="contact100-form-title">
              Get in touch
    			</h2>

            <div className="wrap-input100 validate-input" data-validate="Name is required">

              <input className="input100" type="text" name="name" placeholder="Name" ref={register({ required: true })} />

              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>
            {errors.name && <span className="text-danger">This field is required</span>}

            <div className="wrap-input100 validate-input" >

              <input className="input100" type="email" name="email" placeholder="Email" ref={register({
                required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })} />


              < span className="focus-input100" ></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>

            </div>
            {errors.email && <span className="text-danger">Valid email is required: ex@abc.xyz</span>}

            <div className="wrap-input100 validate-input" data-validate="Message is required">
              <textarea className="input100" name="message" placeholder="Message" ref={register({ required: true })} />
              {errors.message && <span className="text-danger">Message is required</span>}
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button type="submit" className="contact100-form-btn">
                Send
    				</button>
            </div>
          </form>
        </div>
      </div>
    </div >

  )
};

export default Contract;