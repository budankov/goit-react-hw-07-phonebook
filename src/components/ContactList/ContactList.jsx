import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useSelector } from 'react-redux';
import { visibleContacts } from 'redux/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import styles from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <div className={styles.contactListContaoner}>
      <ul className={styles.contactList}>
        {contacts.length === 0
          ? Notify.failure('Contacts list is empty!')
          : contacts.map(({ id, name, phone }) => (
              <ContactListItem key={id} id={id} name={name} phone={phone} />
            ))}
      </ul>
    </div>
  );
};
export default ContactList;
