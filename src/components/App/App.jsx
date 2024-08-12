import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from '../ContactForm/ContactForm'
import { addContact } from "../../redux/contactsSlice";
import "./App.css";

export default function App() {

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox />
            <ContactList />
        </div>
    )
}