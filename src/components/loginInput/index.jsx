import './style.css';

export default function CustomInput({ placeholder = 'Enter text', inputType }) {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      className='custom-input'
    />
  );
}