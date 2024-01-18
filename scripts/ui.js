class ChatUI{
  constructor(list){
    this.list =list;
  }
  clear(){
    this.list.innerHTML = '';
  }
  render(data){
    const when = moment(data.created_at.toDate()).fromNow()
    const html = `
    <li class="list-group-item">
      <span class="username">${data.username}</span>
      <span>said<span>
      <span class="message">${data.message}</span>
      <div class="time">${when}</div>
      <hr>
    </li>
    `;
    this.list.innerHTML += html
}
}