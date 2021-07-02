import React from "react";
import "./index.scss";

type Props = {
  type: string;
  labelText: string;
  labelId?: string;
  formId?: string;
  name: string;
  onChange?: any;
  value: string;
};

const TextField: React.FC<Props> = ({
  type,
  labelText,
  labelId,
  formId,
  name,
  onChange,
  value,
}) => (
  <label id={labelId} htmlFor={formId} className="input_label">
    <input
      type={type || "text"}
      id={formId}
      name={name}
      onChange={onChange}
      placeholder=""
      value={value}
    />
    <span className="label">{labelText}</span>
  </label>
);

export default TextField;
