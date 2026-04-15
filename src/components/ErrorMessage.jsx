export default function ErrorMessage({message}) {
    if (!message) return null
  return (
    <p className="text-danger small mt-1">{message}</p>
  )
}
