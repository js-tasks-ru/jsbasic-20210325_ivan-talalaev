function makeFriendsList(friends) {
  // let liFriends = document.body.innerHTML = "<ul></ul>";
  let listFriends = document.createElement("ul");
  for (const person of friends) {
    listFriends.insertAdjacentHTML(
      "beforeEnd",
      `<li>${person.firstName} ${person.lastName}</li>`
    );
  }
  return listFriends;
}
