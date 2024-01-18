export default function Buttons({label, handler}) {
  return (
    <button onClick={handler}>{label}</button>
  )
}
