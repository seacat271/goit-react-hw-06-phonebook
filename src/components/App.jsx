import ContactList from './ContactList/ContactList';
import { Form } from './Form/Form';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { ContainerGlobal } from './App.styled';


// const useLocalStorage = (key, initialValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? initialValue;})

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state))
//   }, [key, state])
//   return [state, setState]
// }

export const App = () => {
// const [contacts, setContacts] = useLocalStorage("contacts", []);

  return (
    <ContainerGlobal>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </ContainerGlobal>
  );
}