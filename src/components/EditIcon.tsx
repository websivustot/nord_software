import Edit from "../assets/edit.svg";
import "./EditIcon.css";
const EditIcon = ({ id, handleOnClick }: any) => {
  return (
    <div
      onClick={() => {
        handleOnClick(id);
      }}
    >
      <img className="edit-image" src={Edit} alt="Edit" />
    </div>
  );
};
export default EditIcon;
