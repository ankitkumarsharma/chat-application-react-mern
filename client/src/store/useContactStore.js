import {create} from 'zustand';

const useContactStore = create((set) =>({
    selectedContact: null,
    setSelectedContact: (contact) => set({selectedContact: contact}),
    messages: [],
    setMessages: (messages) => set({messages: messages}),
    contactList: [],
    setContactList: (contactList) => set({contactList: contactList}),
    latestMessage: null,
    setLatestMessage: (latestMessage) => set({latestMessage: latestMessage}),
}));

export default useContactStore;