import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const box = mailboxes.find((b) => b._id === Number(mailboxId));

  if (!box) return <p>Mailbox Not Found!</p>

  return (
    <div className="mail-box">
      <p>Box #: {box._id}</p>
      <p>Owner: {box.boxOwner}</p>
      <p>Size: {box.boxSize}</p>
    </div>
  )
}



export default MailboxDetails


