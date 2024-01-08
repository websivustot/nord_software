import { ITableProps } from "../interfaces/ITableProps";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import InlineForm from "./InlineForm";
import ArrowUpIcon from "./ArrowUpIcon";
import ArrowDownIcon from "./ArrowDownIcon";
import "./Table.css";

const Table = ({
  participants,
  handleOnClick,
  focused,
  setFocused,
  remove,
  update,
  sort,
  ascDirection,
}: ITableProps) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="table-head">
            <th
              onClick={() => {
                sort(participants, "name");
              }}
            >
              Name
            </th>
            <th
              onClick={() => {
                sort(participants, "name");
              }}
            >
              <span>
                {ascDirection["name"] ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </span>
            </th>
            <th onClick={() => sort(participants, "emailAddress")}>
              E-mail address
            </th>
            <th onClick={() => sort(participants, "emailAddress")}>
              <span>
                {ascDirection["emailAddress"] ? (
                  <ArrowUpIcon />
                ) : (
                  <ArrowDownIcon />
                )}
              </span>
            </th>
            <th onClick={() => sort(participants, "phoneNumber")}>
              Phone number
            </th>
            <th onClick={() => sort(participants, "phoneNumber")}>
              <span>
                {" "}
                {ascDirection["phoneNumber"] ? (
                  <ArrowUpIcon />
                ) : (
                  <ArrowDownIcon />
                )}
              </span>
            </th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {participants.length &&
            participants.map((participant) => {
              return focused === participant.id ? (
                <tr key={participant.id}>
                  <td colSpan={8}>
                    <InlineForm
                      inlineFormDataInitial={participant}
                      update={update}
                      setFocused={setFocused}
                    />
                  </td>
                </tr>
              ) : (
                <tr
                  key={participant.id}
                  onClick={() => handleOnClick(participant.id)}
                  style={
                    focused === participant.id ? { fontWeight: "bold" } : {}
                  }
                >
                  <td colSpan={2}>{participant.name}</td>
                  <td colSpan={2}>{participant.emailAddress}</td>
                  <td colSpan={2}>{participant.phoneNumber}</td>
                  <td>
                    <EditIcon
                      id={participant.id}
                      handleOnClick={handleOnClick}
                    />
                  </td>
                  <td>
                    <DeleteIcon id={participant.id} remove={remove} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
