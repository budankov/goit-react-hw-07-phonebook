import { useSelector } from 'react-redux';
import { visibleContacts } from 'redux/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListIsEmpty } from 'components/ContactListIsEmpty/ContactListIsEmpty';

import styles from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(visibleContacts);
  console.log(contacts.length);

  // const el = window.document.getElementById('contactList');

  // if (contacts.length > 1) {
  //   el.classList.add('scrollbar');
  // }

  return (
    <div className={styles.contactListContainer}>
      <ul id="contactList" className={styles.contactList}>
        {contacts.length === 0 ? (
          <ContactListIsEmpty />
        ) : (
          contacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))
        )}
      </ul>
    </div>
  );
};
export default ContactList;
