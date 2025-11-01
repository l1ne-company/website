# L1NE COMPANY

![L1ne Company Logo](./215167882.png)

---

## 🎯 Tagline

**CONTAINERLESS ORCHESTRATION SYSTEM**

> "Bringing NixOS to the Cloud"

---

## 📋 About L1NE

**L1ne** is a containerless orchestration framework that brings the full power of **NixOS** to the cloud. It enables reproducible infrastructure through the deployment of immutable, verifiable system definitions instead of container images or mutable environments.

Built on **deterministic computing** and **functional configuration**, L1ne allows systems to scale across any provider through cryptographic proofs of build integrity, transforming orchestration into a property of the operating system itself.

### Key Features

- **Immutable Infrastructure:** Deploy verifiable system definitions, not containers
- **Reproducible Builds:** Cryptographic proofs guarantee build integrity
- **NixOS Native:** Full power of NixOS declarative configuration
- **Multi-Cloud Ready:** Scale across any cloud provider seamlessly
- **Zero Containers:** Direct OS-level orchestration without containerization overhead

---

## 🎯 Mission

Our mission is to create a **complete NixOS cloud ecosystem** that maintains all the benefits of reproducibility, determinism, and declarative design.

With L1ne, developers can build, deploy, and manage NixOS systems natively in the cloud without containers or complex orchestration layers. Our goal is to make the cloud as predictable and reliable as Nix itself, where every environment is built from the same verified source.

### What We Believe

- Infrastructure should be as reproducible as the software it runs
- Determinism beats complexity in production environments
- NixOS deserves cloud-first native tooling
- Containers are an abstraction we can transcend

---

## 🔮 Vision

We envision a future where **NixOS runs natively across the cloud**, and infrastructure is as reproducible as the software it hosts.

In this world, systems scale by reference, converge by proof, and operate safely across heterogeneous environments. L1ne's goal is to make global, multi-cloud infrastructure fully deterministic so you can **build once, verify anywhere, and run anywhere**.

### The Future We're Building

- **Scale by Reference:** Systems propagate through content-addressed references
- **Converge by Proof:** Cryptographic verification replaces configuration drift detection
- **Security by Design:** Immutability and determinism create inherently secure systems
- **NixOS Cloud Native:** First-class support for NixOS on all major cloud providers
- **Developer First:** Simple, declarative workflows that Simply Work™

> _"The cloud should be as deterministic as your local machine."_

---

## 🔗 Links

- **GitHub:** [https://github.com/l1ne-company](https://github.com/l1ne-company)
- **Website Repository:** [https://github.com/l1ne-company/website](https://github.com/l1ne-company/website)

---

## 🎨 Logo - Source Code (GLSL Shader)

The L1ne logo is a 3D visualization rendered in real-time using **raymarching** techniques with GLSL shaders, created with p5.js and WebGL.

### Technology

- **p5.js** for WebGL rendering
- **GLSL** for shader programming
- **Raymarching** for real-time volumetric rendering
- Procedural animation with 8 floating bars
- Purple/blue vertical gradient
- Characteristic diagonal line

### Complete Shader Code

See the full implementation in `/components/RadarCanvas.tsx`

The shader implements:
- Signed Distance Field (SDF) raymarching
- 8 animated bars with varying heights
- Vertical gradient from purple (#944de6) to blue (#3359d9)
- Diagonal white line accent
- Smooth camera rotation
- Ambient occlusion for depth

---

## 🛠️ Tech Stack

- **Frontend:** React 19.1.0 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **3D Graphics:**
  - p5.js 2.0.5
  - GLSL Shaders
  - WebGL

---

## 📊 Design System

### Main Colors

- **Primary (Gold):** `#c79325` / `#d79326`
- **Background:** `#000000` (Black)
- **Text:** `#ededed` / `#a4a4a4` / `#6b7280`
- **Border:** `#352b19`

### Logo Color Palette

- **Top (Purple/Violet):** `#944de6`
- **Base (Deep Blue):** `#3359d9`
- **Diagonal Line:** `#f2f7ff`

### Typography

- **Main Font:** JetBrains Mono
- **Sizes:** 10px - 24px
- **Style:** Uppercase, wide tracking, bold for headings

---

## 🚀 Getting Started

```bash
git clone https://github.com/l1ne-company/website
cd website
npm install
npm run dev
# Open http://localhost:3000
```

---

## ©️ Copyright

© 2025 L1ne Company. All rights reserved.

**Built with NixOS • Powered by Determinism • Verified by Cryptography**

---

## 📝 Project Metadata

- **Name:** l1ne-company-website
- **Version:** 1.0.0
- **Description:** L1ne Company - Containerless orchestration framework landing page
- **License:** ISC
