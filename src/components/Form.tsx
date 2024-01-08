import "./Form.css";
const Form = ({ formData, handleFormChange, add }: any) => {
  return (
    <div className="form-container">
      <form className="add-form">
        <input
          type="text"
          name="name"
          onChange={handleFormChange}
          value={formData.name}
          placeholder="Full name"
        />
        <input
          type="email"
          name="emailAddress"
          onChange={handleFormChange}
          value={formData.emailAddress}
          placeholder="E-mail address"
        />
        <input
          type="tel"
          name="phoneNumber"
          onChange={handleFormChange}
          value={formData.phoneNumber}
          placeholder="Phone number: +358 ..."
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            add(formData);
          }}
        >
          Add new
        </button>
      </form>
    </div>
  );
};

export default Form;
