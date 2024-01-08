import { IParticipant } from "../interfaces/IParticipant";
import _data from "./db.json";
export const getParticipants = (): Promise<IParticipant[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = _data as IParticipant[];
            console.log("data fetching...")
            resolve(data);
          }, 1000);
    })
  };