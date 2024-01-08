import { useEffect, useState } from "react";
import { IParticipant } from "./interfaces/IParticipant";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Table from "./components/Table";
import Form from "./components/Form";
import { getParticipants } from "./api/getParticipants";
import { generateId } from "./helpers/generateId";
import { sortArrayByObjectProperty } from "./helpers/sortArrayByObjectProperty";
import Title from "./components/Title";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "./helpers/validation";
import Message from "./components/Message";

function App() {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [ascDirection, setAscDirection] = useState({
    name: false,
    emailAddress: false,
    phoneNumber: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const [focused, setFocused] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnClick = (id: string) => {
    setFocused(id);
  };

  const fetchParticipants = async () => {
    try {
      const data = await getParticipants();
      setParticipants(data);
    } catch (error) {
      console.log("data fetching error");
    }
  };

  const addParticipant = (participantData: any) => {
    if (!validateName(participantData.name)) {
      setErrorMessage("Name is not valid");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }
    if (!validateEmail(participantData.emailAddress)) {
      setErrorMessage("E-mail address is not valid");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }
    if (!validatePhone(participantData.phoneNumber)) {
      setErrorMessage("Phone number is not valid");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }
    const id = generateId();
    const participant = { id, ...participantData };
    setParticipants([participant, ...participants]);
  };

  const removeParticipant = (id: string) => {
    setParticipants(
      participants.filter((participant) => participant.id !== id)
    );
  };

  const updateParticipant = (participant: IParticipant) => {
    if (!validateName(participant.name)) {
      setErrorMessage("Name is not valid");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }
    if (!validateEmail(participant.emailAddress)) {
      setErrorMessage("E-mail address is not valid");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }
    if (!validatePhone(participant.phoneNumber)) {
      setErrorMessage("Phone number is not valid");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }
    const nextParticipants = participants.map((p) => {
      if (participant.id === p.id) {
        return participant;
      } else {
        return p;
      }
    });
    setParticipants(nextParticipants);
  };

  const sortByProperty = (participants: IParticipant[], key: string) => {
    const nextAscDirection: any = { ...ascDirection };
    nextAscDirection[key] = !nextAscDirection[key];
    const nextParticipants = sortArrayByObjectProperty(
      participants,
      key,
      nextAscDirection[key]
    );
    setParticipants([...nextParticipants]);
    setAscDirection(() => nextAscDirection);
  };

  useEffect(() => {
    fetchParticipants();
  }, []);
  return (
    <div className="App">
      <Layout>
        <Header />
        {errorMessage && <Message text={errorMessage} />}
        <Title />
        <Form
          formData={formData}
          handleFormChange={handleFormChange}
          add={addParticipant}
        />
        {participants && participants.length ? (
          <Table
            participants={participants}
            focused={focused}
            setFocused={setFocused}
            handleOnClick={handleOnClick}
            remove={removeParticipant}
            update={updateParticipant}
            sort={sortByProperty}
            ascDirection={ascDirection}
          />
        ) : (
          <Message text="Fetching..." />
        )}
      </Layout>
    </div>
  );
}

export default App;
