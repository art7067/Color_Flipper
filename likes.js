const users = [];
function vpodobayka() {
  if (users.length === 0) {
    return "no one likes this";
  }
  if (users.length === 1) {
    return users[0] + "likes this";
  }
  if (users.length === 2) {
    return `${users[0]} and ${users[1]} like this`;
  }
  if (users.length === 3) {
    return `${users[0]}, ${users[1]} and ${users[2]} like this`;
  }
  return `${users[0]}, ${users[1]} and ${users.length - 2} others like this`;
}
