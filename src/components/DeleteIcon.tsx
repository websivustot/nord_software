import Delete from "../assets/delete.svg";
import "./DeleteIcon.css";
const DeleteIcon = ({ id, remove }: any) => {
  return (
    <div
      onClick={() => {
        remove(id);
      }}
    >
      <img className="delete-image" src={Delete} alt="Delete" />
    </div>
  );
};
export default DeleteIcon;
