import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";


function App() {
  const [mailboxes, setMailboxes] = useState([]);

  function addBox(newBox) {
    const newId = mailboxes.length + 1;
    setMailboxes([...mailboxes, { _id: newId, ...newBox }]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  );
}




export default App;