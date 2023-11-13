export default function Input({ name, value, label, onChangeValue }) {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={(event) => onChangeValue(name, event.target.value)}
      />
    </p>
  );
}
