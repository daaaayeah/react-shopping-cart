import React from "react";
import PropTypes from "prop-types";
import * as S from "./CheckBox.styled";

const CheckBox = ({ id, name, label, checked, onChange }) => (
  <S.CheckBox htmlFor={id}>
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <span>{label}</span>
  </S.CheckBox>
);

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

CheckBox.defaultProps = {
  checked: false,
};

export default CheckBox;