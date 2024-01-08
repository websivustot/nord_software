import "./Message.css";
const Message = ({ text }: any) => {
  return (
    <div className="message-container">
      <div className="message-inner">
        <h2 className="message">{text}</h2>
      </div>
    </div>
  );
};

export default Message;
