import { Link } from "react-router-dom"

const MailboxList = ({ mailboxes }) => {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {mailboxes.map((box) => (
        <Link key={box._id} to={`/mailboxes/${box._id}`} className="mail-box">
          <div className="mail-box">
            <p>Box #: {box._id}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}


export default MailboxList



