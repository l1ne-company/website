export default function Footer() {
  return (
    <footer>
      <p>
        <strong>L1ne Company</strong> - Containerless Orchestration Framework
      </p>
      <p>
        Built with NixOS • Powered by Determinism • Verified by Cryptography
      </p>
      <p style={{ marginTop: '10px' }}>
        <a href="https://github.com/l1ne-company" target="_blank" rel="noopener noreferrer" style={{ color: '#6c8ed4', textDecoration: 'none' }}>
          GitHub
        </a>
      </p>
      <p style={{ marginTop: '10px', fontSize: '11px' }}>
        © {new Date().getFullYear()} L1ne Company. All rights reserved.
      </p>
    </footer>
  )
}
