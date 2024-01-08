import { useState } from "react";
import "./InlineForm.css";
const InlineForm = ({ inlineFormDataInitial, update, setFocused }: any) => {
  const [inlineFormData, setInlineFormData] = useState(inlineFormDataInitial);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const handleInlineFormChange = (e: any) => {
    const { name, value } = e.target;
    setInlineFormData({
      ...inlineFormData,
      [name]: value,
    });
    setSaveButtonDisabled(false);
  };
  return (
    <div>
      <form className="inline-form">
        <input
          type="text"
          name="name"
          onChange={handleInlineFormChange}
          value={inlineFormData.name}
          placeholder="Full name"
        />
        <input
          type="email"
          name="emailAddress"
          onChange={handleInlineFormChange}
          value={inlineFormData.emailAddress}
          placeholder="E-mail address"
        />
        <input
          type="tel"
          name="phoneNumber"
          onChange={handleInlineFormChange}
          value={inlineFormData.phoneNumber}
          placeholder="Phone number"
        />
        <button
          className="cancel-button"
          onClick={(e) => {
            e.preventDefault();
            setFocused("");
          }}
        >
          Cancel
        </button>
        <button
          className="save-button"
          onClick={(e) => {
            e.preventDefault();
            update(inlineFormData);
            setFocused("");
          }}
          disabled={saveButtonDisabled}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default InlineForm;
