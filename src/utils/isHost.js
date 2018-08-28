export default function isHost(currentUser, hostId) {
  if (currentUser._id === hostId) {
    return true;
  } else {
    return false;
  }
}