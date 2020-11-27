import React, { useState } from "react";
import "./style.css";
import Header from "../../layounts/header/Header";
import Arrow from "../../../assets/arrow.JPG";
import Input from "../../common/input";
import Closer from "../../../assets/closer.JPG";
import UploadPhoto from "../../../assets/upload_photo.JPG";
import Select from "../../common/select";
import classNames from "classnames";
// import { reduxForm, Field } from "redux-form";
import { useForm } from "react-hook-form";

const AddBrand = (props) => {
  

  const [image, setImage] = useState(UploadPhoto);

  const onImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const {register, handleSubmit, control, errors  }  = useForm();
  const onSubmit = values => console.log(values);


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Header />
          <div className="add-brand__under-header">
            <p className="add-brand__p">Add brand</p>
          </div>
        </div>
        <div className="add-brand__container">
          <div className="add-brand__container-contents">
            <p className="add-brand__contents">Basic information</p>
            <img className="add-brand_img-arrow" src={Arrow} alt="arrow"></img>
          </div>
          <div className="add-brand__container-input">
            <Input
              type="text"
              label="Name"
              placeholder="Best Place to Eat"
              customClass="add-brand"
              rightIcon={Closer}
              name="name"
              control={control}
               rules={{ required: { value: true, message: "This field is required" }, }}
               errors={errors}
            />
          </div>
          <div className="add-brand__container-textarea">
            <p className="add-brand__p-textarea">Description</p>
            <textarea
              className="add-brand__textarea"
              name="description"
              ref={register({required: { value: true, message: "This field is required" }})}
              placeholder="Our place is the best place ever!"
            >
            </textarea>
            {/* {errors.email && errors.email.message} */}
          </div>
          <div className="add-brand__container-textarea">
            <Select
              customClass="add-brand"
              options={["American", "German", "Italian"]}
              label="Cusines(up to 3)"
              name="cusines"
              control={control}
              rules={{ required: true}}
              errors={errors}
              
            />
          </div>
          <div className="add-brand__container-upload-photo">
            <div className="add-brand__image">
              <input
                type="file"
                id="add-brand__upload-photo"
                className="add-brand__upload-photo"
                onChange={onImageChange}
              />
              <label
                className="add-brand__image-label"
                htmlFor="add-brand__upload-photo"
              >
                <img
                  className="add-brand__img-upload-photo"
                  src={image}
                  alt="loaded_photo"
                ></img>
              </label>
            </div>
            <div>
              <p className="add-brand__subtitle">Upload a photo</p>
              <p className="add-brand__under-subtitle">
                Upload a photo of your restaurant in order to gain more
                attention
              </p>
            </div>
          </div>

          <div className="add-brand__container-contents">
            <p className="add-brand__contents">Contact information</p>
            <img className="add-brand_img-arrow" src={Arrow} alt="arrow"></img>
          </div>
          <div>
            <Input
              customClass="add-brand"
              label="Phone number"
              placeholder="375(33) 643-44-23"
              name="phoneNumber"
              control={control}
              rules={{ required: { value: true, message: "This field is required" }}}
              errors={errors}
            />
          </div>
          <div className="add-brand__container-selector">
            <Input
              customClass="add-brand"
              label="Email"
              placeholder="example@example.com"
              name="email"
              control={control}
              rules={{
                required: { value: true, message: "This field is required" },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message:
                    "Please enter your email address in format: yourname@example.com",
                },
              }}
              errors={errors}
            />
          </div>

          <div className="add-brand__container-contents">
            <p className="add-brand__contents">Service information</p>
            <img className="add-brand_img-arrow" src={Arrow} alt="arrow"></img>
          </div>
          <div>
            <Select
              customClass="add-brand"
              options={["USD - $", "EURO - e", "BYN"]}
              label="Currency"
              name="currency"
              control={control}
              rules={{ required: false}}
              errors={errors}
            />
          </div>
          <div
            className={classNames(
              "add-brand__container-input",
              "add-brand__container-selector"
            )}
          >
            <Input
              type="text"
              label="Manager id"
              placeholder="11222333"
              customClass="add-brand"
              rightIcon={Closer}
              name="managerId"
              control={control}
              rules={{ required: { value: true, message: "This field is required" }}}
              errors={errors}
            />
          </div>
          <div className="add-brand__container-invite">
            <button className="add-brand__invite-button">
              + Invite with email
            </button>
          </div>
          <div className="add-brand__container-button">
            <button type="submit" className="add-brand__footer-button">Add brand</button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default AddBrand;
