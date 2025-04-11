export default function AddTradePage() {
  const userId = sessionStorage.getItem('userId');
  return (
    <div>
      <p>User ID: {userId}</p>
    </div>
  );
}
