import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInputs from "./components/UserInputs";

const INITIAL_VALUES = {
  initial: 100000,
  annual: 1200,
  expected: 6,
  duration: 10,
};

function App() {
  const [fields, setFields] = useState(INITIAL_VALUES);

  const handleFieldChange = (fieldIdentifier, updatedValue) => {
    setFields((fields) => {
      let updatedFields = {
        ...fields,
        [fieldIdentifier]: +updatedValue,
      };
      return updatedFields;
    });
  };

  const isFieldsValid = fields.duration > 0;

  return (
    <>
      <Header />
      <UserInputs fields={fields} onHandleFieldChange={handleFieldChange} />

      {!isFieldsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {isFieldsValid && <Results fields={fields} />}
    </>
  );
}

export default App;
