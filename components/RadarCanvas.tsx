"use client";

import React, { useEffect, useRef } from 'react';
import type p5 from 'p5';

export default function RadarCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    // Dynamically import p5 only on the client side
    import('p5').then((p5Module) => {
      const p5 = p5Module.default;

      const sketch = (p: p5) => {
        let time = 0;

        // Bar heights matching original logo
        const barHeights = [1.0, 1.4, 1.9, 2.3, 2.6, 2.2, 1.7, 1.3];

        // Retro color palette - cycling colors per bar
        const wireColors = [
          [255, 255, 0],   // Yellow
          [0, 255, 255],   // Cyan
          [0, 255, 0],     // Green
          [255, 0, 255],   // Magenta
          [148, 77, 230],  // Purple (L1NE color)
          [51, 89, 217],   // Blue (L1NE color)
          [255, 100, 100], // Red
          [100, 255, 255], // Light cyan
        ];

        p.setup = () => {
          const container = containerRef.current;
          if (!container) return;

          const width = container.clientWidth || 400;
          const height = container.clientHeight || 350;

          p.createCanvas(width, height, p.WEBGL);
          p.strokeWeight(1.5);
        };

        p.draw = () => {
          p.background(0);

          time += 0.01;

          // Camera rotation
          p.rotateY(time * 0.5);
          p.rotateX(-0.3);

          // Scale everything up
          const scale = p.height / 6;

          // Draw grid floor
          p.push();
          p.translate(0, scale * 2.5, 0);
          p.rotateX(p.HALF_PI);
          drawGrid(p, scale);
          p.pop();

          // Draw the 8 bars
          for (let i = 0; i < 8; i++) {
            const x = (i - 3.5) * scale * 0.52;
            const floatOffset = Math.sin(time * 0.6 + i * 0.8) * scale * 0.12;
            const h = barHeights[i] * scale;
            const w = scale * 0.22;

            p.push();
            p.translate(x, floatOffset, 0);

            // Use color based on bar index
            const col = wireColors[i % wireColors.length];
            p.stroke(col[0], col[1], col[2]);

            drawWireframeBox(p, w, h, w);
            p.pop();
          }

          // Draw diagonal line
          p.push();
          p.stroke(255, 255, 255, 200);
          p.strokeWeight(2);
          p.line(
            -scale * 2.5, scale * 2.0, 0,
            scale * 2.5, -scale * 1.5, 0
          );
          p.pop();
        };

        function drawWireframeBox(p: p5, w: number, h: number, d: number) {
          // Bottom face
          p.beginShape();
          p.vertex(-w, h, -d);
          p.vertex(w, h, -d);
          p.vertex(w, h, d);
          p.vertex(-w, h, d);
          p.vertex(-w, h, -d);
          p.endShape();

          // Top face
          p.beginShape();
          p.vertex(-w, -h, -d);
          p.vertex(w, -h, -d);
          p.vertex(w, -h, d);
          p.vertex(-w, -h, d);
          p.vertex(-w, -h, -d);
          p.endShape();

          // Vertical edges
          p.line(-w, -h, -d, -w, h, -d);
          p.line(w, -h, -d, w, h, -d);
          p.line(w, -h, d, w, h, d);
          p.line(-w, -h, d, -w, h, d);

          // Draw internal grid lines for more detail
          const divisions = 4;

          // Horizontal divisions on front face
          for (let i = 1; i < divisions; i++) {
            const y = p.lerp(-h, h, i / divisions);
            p.line(-w, y, d, w, y, d);
          }

          // Vertical divisions on front face
          for (let i = 1; i < divisions; i++) {
            const x = p.lerp(-w, w, i / divisions);
            p.line(x, -h, d, x, h, d);
          }
        }

        function drawGrid(p: p5, scale: number) {
          const gridSize = 10;
          const gridSpacing = scale * 0.5;

          p.stroke(0, 255, 255, 80); // Cyan grid

          // Draw grid lines
          for (let i = -gridSize; i <= gridSize; i++) {
            // Lines along X
            p.line(
              -gridSize * gridSpacing, i * gridSpacing, 0,
              gridSize * gridSpacing, i * gridSpacing, 0
            );
            // Lines along Y
            p.line(
              i * gridSpacing, -gridSize * gridSpacing, 0,
              i * gridSpacing, gridSize * gridSpacing, 0
            );
          }
        }

        p.windowResized = () => {
          const container = containerRef.current;
          if (!container) return;

          const width = container.clientWidth || 400;
          const height = container.clientHeight || 350;
          p.resizeCanvas(width, height);
        };
      };

      p5InstanceRef.current = new p5(sketch, containerRef.current || undefined);
    });

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full min-h-0" style={{ background: '#000' }} />
  );
}
