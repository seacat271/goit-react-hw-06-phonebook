import {
  ItemList,
  Item,
  ItemContainer,
  NameStyle,
  ButtonDelete,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteContact } from 'redux/store';

const ContactList = () => {
const dispatch = useDispatch();
const contacts = useSelector(state => state.contacts)
  return (
    <ItemList>
      {contacts.map(({ name, id, number }) => (
        <Item key={id}>
          <ItemContainer>
            {name}: <NameStyle>{number}</NameStyle>
          </ItemContainer>
          <ButtonDelete onClick={() => dispatch(deleteContact(id))}>Delete</ButtonDelete>
        </Item>
      ))}
    </ItemList>
  );
};

export default ContactList;


