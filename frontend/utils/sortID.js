export default function sortID(id1, id2) {
  return id1.localeCompare(id2) < 0 || id1.localeCompare(id2) == 0 ? (id1 + id2) : (id2 + id1)
}