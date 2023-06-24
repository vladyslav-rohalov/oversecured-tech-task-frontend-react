export default function formatDate(date) {
  return date
    .slice(0, date.length - 8)
    .split('T')
    .join(' ');
}
