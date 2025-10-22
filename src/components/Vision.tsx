export default function Vision() {
  return (
    <section id="vision">
      <h2>Our Vision</h2>
      <p>
        We imagine a future where <strong>NixOS runs natively across the cloud</strong>, and
        infrastructure is as reproducible as the software it hosts.
      </p>
      <p>
        In this world, systems scale by reference, converge by proof, and operate securely across
        heterogeneous environments. L1ne's goal is to make global, multi-cloud infrastructure fully
        deterministic so you can <strong>build once, verify everywhere, and run anywhere</strong>.
      </p>
      <hr />
      <h3>The Future We're Building</h3>
      <ul>
        <li><strong>Scale by Reference:</strong> Systems propagate through content-addressed references</li>
        <li><strong>Converge by Proof:</strong> Cryptographic verification replaces configuration drift detection</li>
        <li><strong>Secure by Design:</strong> Immutability and determinism create inherently secure systems</li>
        <li><strong>Cloud Native NixOS:</strong> First-class NixOS support across all major cloud providers</li>
        <li><strong>Developer First:</strong> Simple, declarative workflows that Just Work™</li>
      </ul>
      <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '16px' }}>
        <em>"The cloud should be as deterministic as your local machine."</em>
      </p>
    </section>
  )
}
