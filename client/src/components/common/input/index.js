import React from "react";
import classNames from "classnames";
import "./style.css";
import {  Controller } from "react-hook-form";

export const InnerInput = (props) => {
  const {
    errors,
    label,
    customClass,
    leftIcon,
    rightIcon,
    name,
    ...otherProps
  } = props;

  const isError = errors && errors[name];

  return (
    <div
      className={classNames(
        "input-wrapper",
        customClass ? `${customClass}__input-wrapper` : ""
      )}
    >
      {label && (
        <p
          className={classNames(
            "label",
            customClass ? `${customClass}__label` : ""
          )}
        >
          {label}
        </p>
      )}

      <div
        className={classNames(
          "input-container",
          customClass ? `${customClass}__input-container` : ""
        )}
      >
        {leftIcon && (
          <img
            className={classNames(
              "left-icon",
              customClass ? `${customClass}__left-icon` : ""
            )}
            src={leftIcon}
            alt="icon"
          ></img>
        )}
        <input
          className={classNames(
            "input",
            customClass ? `${customClass}__input` : "",
            isError ? 'input__error': ''
          )}
          {...otherProps}
        />
        {rightIcon && (
          <img
            className={classNames(
              "right-icon",
              customClass ? `${customClass}__right-icon` : ""
            )}
            src={rightIcon}
            alt="icon"
          ></img>
        )}
      </div>

      {isError && <p className={classNames(
            "error",
            customClass ? `${customClass}__error` : ""
          )}>{errors[name].message}</p>}
    </div>
  );
};

const Input = (props) => (
  <Controller
    name={props.name}
    control={props.control}
    rules={props.rules}
    defaultValue={props.defaultValue || ""}
    render={(controllerProps) => <InnerInput {...props} {...controllerProps} />}
  />
);

export default Input;
