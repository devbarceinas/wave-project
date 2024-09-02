import './input.css';

export interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: string) => void;
}

export const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange
}: InputProps) => {
  
  return (
    <div className="storybook-input--container">
      {label && <label className='storybook-input--label'>{label}</label>}
      <input
        className='storybook-input--box'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>  
  )
}