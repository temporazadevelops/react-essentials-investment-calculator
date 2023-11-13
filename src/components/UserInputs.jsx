import Input from "./Input";

export default function UserInputs({ fields, onHandleFieldChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          name="initial"
          value={fields.initial}
          label="Initial Investment"
          onChangeValue={onHandleFieldChange}
        />
        <Input
          name="annual"
          value={fields.annual}
          label="Annual Investment"
          onChangeValue={onHandleFieldChange}
        />
      </div>
      <div className="input-group">
        <Input
          name="expected"
          value={fields.expected}
          label="Expected Return"
          onChangeValue={onHandleFieldChange}
        />
        <Input
          name="duration"
          value={fields.duration}
          label="Duration"
          onChangeValue={onHandleFieldChange}
        />
      </div>
    </div>
  );
}
