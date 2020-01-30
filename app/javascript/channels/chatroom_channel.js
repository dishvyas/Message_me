import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    var node = document.createElement("P");
    var n = JSON.stringify(data.content);
    // console.log(data);
    var textnode = document.createTextNode(n);
    node.id = data.content.id;
    // JSON.stringify(textnode)
    console.log(textnode)
    node.appendChild(textnode);
    document.getElementById("message-container").appendChild(node);
    document.getElementById('message_body').value= ''

    // Called when there's incoming data on the websocket for this channel
  }
});
// consumer.subscriptions.create({ channel: "ChatroomChannel", room: "Best Room" }, {
//   received(data) {
//     this.appendLine(data)
//   },

//   appendLine(data) {
//     const html = this.createLine(data)
//     const element = document.querySelector("[data-chat-room='Best Room']")
//     element.insertAdjacentHTML("beforeend", html)
//   },

//   createLine(data) {
//     return `
//       <article class="chat-line">
//         <span class="speaker">${data["sent_by"]}</span>
//         <span class="body">${data["body"]}</span>
//       </article>
//     `
//   }
// })