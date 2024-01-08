import { IParticipant } from "./IParticipant";

export interface ITableProps {
  participants: IParticipant[];
  focused: string;
  setFocused: Function;
  handleOnClick: any;
  remove: any;
  update: any;
  sort: any;
  ascDirection: { name: boolean; emailAddress: boolean; phoneNumber: boolean };
}
