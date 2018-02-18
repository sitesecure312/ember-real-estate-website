/**
 * Created by baebae on 4/6/16.
 */

import Contacts from 'react-native-contacts';
import { ContactActions } from 'ReduxActions';

export class ContactUtils {
  static getContacts(dispatch) {
    Contacts.getAll((err, contacts) => {
      if (err && err.type === 'permissionDenied') {
        // x.x
      } else {
        dispatch(ContactActions.updateContact(contacts));
      }
    });
  }
}