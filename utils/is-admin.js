export default function isAdmin(currentUser) {
  return currentUser.userRoles.some(role => role.name === 'ADMIN');
}
