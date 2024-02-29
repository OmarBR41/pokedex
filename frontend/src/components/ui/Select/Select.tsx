import styles from "./Select.module.css";

type Option = {
  label: string;
  value: string | number;
};

type SelectProps = Option & {
  options: Option[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export const Select = ({ label, value, options, onChange }: SelectProps) => {
  return (
    <label className={styles.label}>
      {label}
      <select className={styles.select} value={value} onChange={onChange}>
        {options.map(({ value, label }) => (
          <option key={value} className={styles.option} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};
