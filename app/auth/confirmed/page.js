export default function ConfirmedPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        textAlign: 'center',
        fontFamily: 'system-ui',
      }}
    >
      <div>
        <h1>Email Confirmed ✓</h1>
        <p>Your email has been verified successfully.</p>
        <p>You can now return to Hair Business Pro and sign in.</p>
      </div>
    </main>
  );
}