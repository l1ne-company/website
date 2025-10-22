export default function Description() {
  return (
    <section id="description">
      <h2>About L1ne</h2>
      <p>
        <strong>L1ne</strong> is a containerless orchestration framework that brings the full power of
        <strong> NixOS</strong> to the cloud. It enables reproducible infrastructure by deploying
        immutable, verifiable system definitions instead of container images or mutable environments.
      </p>
      <p>
        Built on <strong>deterministic computation</strong> and <strong>functional configuration</strong>,
        L1ne allows systems to scale across any provider through cryptographic proofs of build
        integrity, turning orchestration into a property of the operating system itself.
      </p>
      <hr />
      <h3>Key Features</h3>
      <ul>
        <li><strong>Immutable Infrastructure:</strong> Deploy verifiable system definitions, not containers</li>
        <li><strong>Reproducible Builds:</strong> Cryptographic proofs ensure build integrity</li>
        <li><strong>Native NixOS:</strong> Full power of NixOS declarative configuration</li>
        <li><strong>Multi-Cloud Ready:</strong> Scale across any cloud provider seamlessly</li>
        <li><strong>Zero Containers:</strong> Direct OS-level orchestration without containerization overhead</li>
      </ul>
    </section>
  )
}
