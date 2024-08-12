import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const visibleContacts = contacts.filter((contact) => {
        if (filter.trim() === '') {
            return contacts;
        }
        return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => (
                <li className={css.listItem} key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    )
}