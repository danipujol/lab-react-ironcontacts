import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const someContacts = contactsData.slice(15, 20);

  const [contacts, setContacts] = useState(someContacts);

  const addRandom = () => {
    const indexRandom = Math.floor(Math.random() * contactsData.length);
    const randomContact = contactsData[indexRandom];
    setContacts([...contacts, randomContact]);
  };

  const sortContact = () => {
    const cloneContacts = JSON.parse(JSON.stringify(contacts));
    cloneContacts.sort((contact2, contact1) => {
      return contact2.popularity > contact1.popularity ? 1 : -1;
    });
    setContacts(cloneContacts);
  };

  const sortContactByName = () => {
    const cloneContacts = JSON.parse(JSON.stringify(contacts));
    cloneContacts.sort((contact2, contact1) => {
      return contact2.name > contact1.name ? 1 : -1;
    });
    setContacts(cloneContacts);
  };

const deleteContact = (index) => {

  const cloneContacts = JSON.parse(JSON.stringify(contacts))
  cloneContacts.splice(index,1)
  setContacts(cloneContacts)

}


  return (
    <div className="App">
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortContact}>Sort by popularity</button>
      <button onClick={sortContactByName}>Sort by nanme</button>
      <table>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popular</td>
          <td>Won an oscar</td>
          <td>Won an Emmy</td>
          <td>Actions</td>
        </tr>

        <tbody>
          {contacts.map((eachContact) => (
            <tr key={eachContact.id}>
              <td>
                <img
                  src={eachContact.pictureUrl}
                  alt={eachContact.name}
                  width="50px"
                />
              </td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity}</td>
              <td>{eachContact.wonOscar ? <span>💎</span> : undefined}</td>
              <td>{eachContact.wonEmmy ? <span>💎</span> : undefined}</td>
              <td>
                <button onClick={deleteContact}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
