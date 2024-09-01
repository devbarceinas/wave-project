import './select.css';

export interface SelectProps {
  options: { value: string, label: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
};

export const Select = ({
  options,
  onChange,
  defaultValue
}: SelectProps) => {

  return (
    <div className='storybook-select--container'>
      <select
        className="storybook-select--options"
        onChange={(event) => onChange(event.target.value)}
        defaultValue={defaultValue}>
          {options?.map(option => (
            <option  
              key={option.value} 
              value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};