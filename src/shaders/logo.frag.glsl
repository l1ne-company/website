// L1ne Company Logo Fragment Shader
// Raymarching shader with vertical gradients and diagonal line
// Author: L1ne Company
// License: MIT

precision highp float;

varying vec2 vTexCoord;
uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.14159265359
#define MAX_STEPS 120
#define MAX_DIST 20.0
#define SURF_DIST 0.0005

mat2 rot(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

float sdBox(vec3 p, vec3 b) {
  vec3 q = abs(p) - b;
  return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}

float sdPlane(vec3 p) {
  return p.y + 2.5;
}

// Diagonal line SDF
float sdLine(vec3 p, vec3 a, vec3 b, float thickness) {
  vec3 pa = p - a;
  vec3 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h) - thickness;
}

float getHeight(int idx) {
  if (idx == 0) return 1.0;
  if (idx == 1) return 1.4;
  if (idx == 2) return 1.9;
  if (idx == 3) return 2.3;
  if (idx == 4) return 2.6;
  if (idx == 5) return 2.2;
  if (idx == 6) return 1.7;
  return 1.3;
}

// Get vertical gradient color based on height within bar
vec3 getBarGradient(float heightRatio) {
  // Purple/violet at top (height = 1.0)
  vec3 topColor = vec3(0.58, 0.30, 0.90);    // Bright purple/violet
  // Blue at bottom (height = 0.0)
  vec3 bottomColor = vec3(0.20, 0.35, 0.85); // Deep blue

  return mix(bottomColor, topColor, heightRatio);
}

vec3 mapBars(vec3 p, out float barIdx, out float heightRatio) {
  float minDist = 1000.0;
  barIdx = 0.0;
  heightRatio = 0.0;

  for (int i = 0; i < 8; i++) {
    vec3 q = p;
    float x = (float(i) - 3.5) * 0.52;
    float floatOffset = sin(u_time * 0.6 + float(i) * 0.8) * 0.12;
    q.x -= x;
    q.y -= floatOffset;

    float h = getHeight(i);
    float d = sdBox(q, vec3(0.22, h, 0.22));

    if (d < minDist) {
      minDist = d;
      barIdx = float(i);
      // Calculate height ratio within this bar (0 at bottom, 1 at top)
      heightRatio = clamp((q.y + h) / (2.0 * h), 0.0, 1.0);
    }
  }

  return vec3(minDist, barIdx, heightRatio);
}

vec3 map(vec3 p, out float barIdx, out float heightRatio) {
  vec3 bars = mapBars(p, barIdx, heightRatio);
  float ground = sdPlane(p);

  // Diagonal line from upper left to lower right
  vec3 lineStart = vec3(-2.5, 2.0, 0.0);
  vec3 lineEnd = vec3(2.5, -1.5, 0.0);
  float line = sdLine(p, lineStart, lineEnd, 0.04);

  float minDist = bars.x;
  float material = 0.0; // 0 = bar

  if (ground < minDist) {
    minDist = ground;
    material = 1.0; // 1 = ground
  }

  if (line < minDist) {
    minDist = line;
    material = 2.0; // 2 = diagonal line
  }

  return vec3(minDist, material, bars.y);
}

vec3 calcNormal(vec3 p) {
  const float h = 0.0001;
  const vec2 k = vec2(1, -1);
  float dummy1, dummy2;
  return normalize(
    k.xyy * map(p + k.xyy * h, dummy1, dummy2).x +
    k.yyx * map(p + k.yyx * h, dummy1, dummy2).x +
    k.yxy * map(p + k.yxy * h, dummy1, dummy2).x +
    k.xxx * map(p + k.xxx * h, dummy1, dummy2).x
  );
}

float calcAO(vec3 p, vec3 n) {
  float occ = 0.0;
  float sca = 1.0;
  for (int i = 0; i < 5; i++) {
    float h = 0.01 + 0.15 * float(i) / 4.0;
    float dummy1, dummy2;
    float d = map(p + h * n, dummy1, dummy2).x;
    occ += (h - d) * sca;
    sca *= 0.95;
  }
  return clamp(1.0 - 1.2 * occ, 0.0, 1.0);
}

vec3 render(vec3 ro, vec3 rd) {
  vec3 col = vec3(0.0);
  float t = 0.0;
  float barIdx = 0.0;
  float heightRatio = 0.0;

  // Raymarching
  for (int i = 0; i < MAX_STEPS; i++) {
    vec3 p = ro + rd * t;
    vec3 res = map(p, barIdx, heightRatio);
    float d = res.x;
    float material = res.y;

    if (d < SURF_DIST) {
      vec3 n = calcNormal(p);

      if (material < 0.5) {
        // Bar material - vertical gradient
        vec3 baseCol = getBarGradient(heightRatio);

        // Clean modern lighting
        vec3 lightDir = normalize(vec3(0.3, 0.8, -0.5));
        float diff = max(dot(n, lightDir), 0.0) * 0.6 + 0.4;

        // Subtle specular
        vec3 viewDir = normalize(ro - p);
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(n, halfDir), 0.0), 40.0) * 0.4;

        // AO for depth
        float ao = calcAO(p, n);

        col = baseCol * diff * ao + vec3(spec);

        // Subtle emissive glow
        col += baseCol * 0.15;

      } else if (material < 1.5) {
        // Ground - dark reflective
        vec3 baseCol = vec3(0.08, 0.10, 0.18);
        float ao = calcAO(p, n);
        col = baseCol * ao * 0.7;

      } else {
        // Diagonal white line
        col = vec3(0.95, 0.97, 1.0);
        // Add glow to the line
        col += vec3(0.2, 0.25, 0.3);
      }

      break;
    }

    t += d * 0.9;
    if (t > MAX_DIST) break;
  }

  // Clean gradient background
  if (t >= MAX_DIST) {
    float grad = smoothstep(-0.3, 0.6, rd.y);
    col = mix(vec3(0.08, 0.10, 0.20), vec3(0.15, 0.12, 0.28), grad);
  }

  // Atmospheric glow around bars
  float glow = 0.0;
  for (int i = 0; i < 8; i++) {
    float x = (float(i) - 3.5) * 0.52;
    float floatOffset = sin(u_time * 0.6 + float(i) * 0.8) * 0.12;
    vec3 barPos = vec3(x, floatOffset, 0.0);

    vec3 rayPos = ro + rd * min(t, MAX_DIST);
    float dist = length(rayPos.xy - barPos.xy);

    float h = getHeight(i);
    float heightFactor = smoothstep(2.5, 0.0, abs(rayPos.y - barPos.y)) * (h / 2.6);

    glow += (0.008 / (dist * dist + 0.1)) * heightFactor;
  }

  vec3 glowColor = mix(vec3(0.20, 0.35, 0.85), vec3(0.58, 0.30, 0.90), 0.5);
  col += glowColor * glow * 0.6;

  return col;
}

void main() {
  vec2 uv = (vTexCoord * 2.0 - 1.0);
  uv.x *= u_resolution.x / u_resolution.y;

  // Camera setup with gentle rotation
  vec3 ro = vec3(0.0, 0.8, 5.5);
  vec3 rd = normalize(vec3(uv, -2.0));

  // Subtle rotation
  rd.yz *= rot(-0.15);
  rd.xz *= rot(u_time * 0.25);
  ro.yz *= rot(-0.15);
  ro.xz *= rot(u_time * 0.25);

  vec3 col = render(ro, rd);

  // Tone mapping for modern look
  col = col / (col + vec3(0.8));
  col = pow(col, vec3(0.4545));

  // Slight contrast boost
  col = mix(vec3(0.5), col, 1.15);

  gl_FragColor = vec4(col, 1.0);
}
