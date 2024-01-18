// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('p');
const rooms = document.querySelector('nav');
const display = document.querySelector('.room-display');
//add a new chat
newChatForm.addEventListener('submit', e =>{
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
  .then(() => newChatForm.reset())
  .catch(err => console.log(err));
});


//update name
newNameForm.addEventListener('submit', e => {
  e.preventDefault();
  //update name via the chatname class
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  //reset the form
  newNameForm.reset();
  //show then hide the update message;
  updateMsg.innerHTML = `Your name was updated to <span class="red">${newName}</span>`;
  setTimeout(() => updateMsg.innerHTML ='', 3000);
});

//update the chat room
rooms.addEventListener('click', e => {
  if(e.target.tagName === 'BUTTON'){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chat => chatUI.render(chat));
  }
})

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon';

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username);

//get chats and render
chatroom.getChats((data) => {
  chatUI.render(data);
})