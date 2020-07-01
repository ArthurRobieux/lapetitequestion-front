import React from "react";
import classNames from "classnames";
import Select from "react-select";

import styles from "./styles.module.scss";

export type SelectInputOption = {
  label: any;
  value: string;
  isDisabled?: boolean;
};
export type ValueType = any;

export type SelectInputProps = {
  className?: string;
  options: SelectInputOption[];
  onChange: (value: ValueType) => void;
  selectOption: ValueType;
  placeholder: string;
  isMulti?: boolean;
  border?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  size?: "max" | "small" | "default";
  native?: boolean;
  forceNative?: boolean;
  tab?: boolean;
};

export const SelectInput = ({
  className,
  options,
  onChange,
  selectOption,
  placeholder,
  isMulti,
  border = true,
  invalid,
  disabled = false,
  clearable = true,
  size = "max",
  native = true,
  forceNative = false,
  tab,
}: SelectInputProps) => {
  if ((window.innerWidth <= 1024 && native) || forceNative) {
    return (
      <select
        className={classNames(styles.nativeSelectInput, className, {
          [styles.border]: border,
          [styles.borderInvalid]: border && invalid,
          [styles.borderDisabled]: border && disabled,
        })}
        value={selectOption ? selectOption.value : null}
        onChange={(evt) => {
          onChange({ label: evt.target.value, value: evt.target.value });
        }}
        disabled={disabled}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value} label={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
  return (
    <div
      className={classNames(styles.selectInput, className, {
        [styles.small]: size === "small",
      })}
    >
      <Select
        options={options}
        onChange={onChange}
        value={selectOption}
        placeholder={placeholder}
        className={classNames("basic-multi-select", {
          [styles.border]: border,
          [styles.borderInvalid]: border && invalid,
          [styles.borderDisabled]: border && disabled,
          [styles.tab]: tab,
        })}
        classNamePrefix="select"
        isMulti={isMulti}
        isDisabled={disabled}
        isClearable={clearable}
        noOptionsMessage={() => "Pas d'options"}
      />
    </div>
  );
};
