import Logo3D from './Logo3D'

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <h1>L1ne Company</h1>
      <p className="tagline">Containerless Orchestration for the Cloud</p>

      <div className="canvas-container">
        <Logo3D />
      </div>

      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        <strong>Bringing the full power of NixOS to the cloud</strong>
      </p>
    </div>
  )
}
