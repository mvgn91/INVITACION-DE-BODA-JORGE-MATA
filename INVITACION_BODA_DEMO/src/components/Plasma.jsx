import React, { useEffect, useRef, memo, useCallback } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Plasma = memo(({ 
  color = "#c4176a", 
  speed = 0.4, 
  scale = 1.2, 
  opacity = 0.6, 
  mouseInteractive = true 
}) => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  
  // Solo renderizar cuando esté en viewport
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });

  useEffect(() => {
    // Solo inicializar cuando esté en viewport
    if (!isIntersecting) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported, falling back to CSS gradient');
      return;
    }

    glRef.current = gl;

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_uv = (a_position + 1.0) * 0.5;
      }
    `;

    // Fragment shader optimizado
    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform vec3 u_color;
      uniform float u_opacity;
      varying vec2 v_uv;

      void main() {
        vec2 uv = v_uv;
        vec2 center = vec2(0.5);
        
        // Efecto plasma optimizado
        float time = u_time * 0.5;
        
        // Onda principal
        float wave1 = sin(uv.x * 8.0 + time) * 0.5;
        float wave2 = sin(uv.y * 8.0 + time * 0.7) * 0.5;
        float wave3 = sin((uv.x + uv.y) * 4.0 + time * 1.2) * 0.3;
        
        // Distancia al centro
        float dist = distance(uv, center);
        float wave4 = sin(dist * 12.0 + time * 0.8) * 0.4;
        
        // Interacción con mouse
        float mouseDist = distance(uv, u_mouse);
        float mouseWave = sin(mouseDist * 15.0 - time * 2.0) * 0.2;
        
        // Combinar ondas
        float plasma = wave1 + wave2 + wave3 + wave4 + mouseWave;
        plasma = (plasma + 2.0) / 4.0; // Normalizar a 0-1
        
        // Aplicar opacidad y color
        float alpha = plasma * u_opacity;
        vec3 finalColor = u_color * plasma;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    // Crear shaders
    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    }

    // Crear programa
    function createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      
      return program;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = createProgram(gl, vertexShader, fragmentShader);

    if (!program) return;

    programRef.current = program;

    // Crear geometría (cuadrado completo)
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Configurar atributos
    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    // Obtener ubicaciones de uniforms
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');
    const colorLocation = gl.getUniformLocation(program, 'u_color');
    const opacityLocation = gl.getUniformLocation(program, 'u_opacity');

    // Convertir color hex a RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const handleMouseMove = (e) => {
      if (!mouseInteractive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = 1.0 - (e.clientY - rect.top) / rect.height; // Invertir Y
    };

    const animate = () => {
      timeRef.current += speed * 0.01;
      
      gl.useProgram(program);
      
      // Configurar uniforms
      gl.uniform1f(timeLocation, timeRef.current);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y);
      gl.uniform3f(colorLocation, r, g, b);
      gl.uniform1f(opacityLocation, opacity);
      
      // Dibujar
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (gl && program) {
        gl.deleteProgram(program);
      }
    };
  }, [color, speed, scale, opacity, mouseInteractive, isIntersecting]);

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {isIntersecting && (
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            transform: `scale(${scale})`,
            transformOrigin: 'center',
          }}
        />
      )}
    </div>
  );
});

Plasma.displayName = 'Plasma';

export default Plasma;
