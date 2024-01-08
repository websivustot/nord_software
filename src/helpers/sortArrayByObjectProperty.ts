import { IParticipant } from "../interfaces/IParticipant"

export const sortArrayByObjectProperty = (participants: IParticipant[], key: string, ascDirection = true) => {
    const sorted = [...participants].sort((a:any, b:any) => {
        if (a[key] < b[key]) return ascDirection ? -1 : 1;
        if (a[key] > b[key]) return ascDirection ? 1 : -1;
        return 0;
      });
    
    return sorted;
}