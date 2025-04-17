
document.getElementById('login').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    if (user.email === "ruands85@gmail.com") {
      document.getElementById('user-email').textContent = "Admin: " + user.email;
    } else {
      document.getElementById('user-email').textContent = user.email;
    }
  }).catch(console.error);
});
