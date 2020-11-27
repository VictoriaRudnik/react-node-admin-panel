import React from "react";
import classNames from "classnames";
import "./style.css";
import {Controller } from "react-hook-form";

export const InnerSelect = (props) => {
  const { label, options, customClass,  errors, name,  ...otherProps} = props;

  return (
    <div>
      <p
        className={classNames(
          "p-textarea",
          customClass ? `${customClass}__p-textarea` : ""
        )}
      >
        {label}
      </p>
      <select
        className={classNames(
          "selector",
          customClass ? `${customClass}__selector` : ""
        )}
        {...otherProps}
      >
        {options.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

const Select = (props) => (
  <Controller
    name={props.name}
    control={props.control}
    rules={props.rules}
    defaultValue={props.defaultValue || ""}
    render={(controllerProps) => <InnerSelect {...props} {...controllerProps} />}
  />
);

export default Select;
