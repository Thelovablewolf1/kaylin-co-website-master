'use client'

import { useEffect, useRef, useState } from 'react'

// Define minimal TypeScript types for Three.js to avoid import issues
type ThreeMesh = any; // We'll use any since we're dynamically importing
type ThreeScene = any;
type ThreeCamera = any;
type ThreeRenderer = any;
type ThreeGeometry = any;
type ThreeMaterial = any;

export default function DreamCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !canvasRef.current) return

    // Dynamic import for Three.js to reduce bundle size and avoid SSR issues
    const initThreeJS = async () => {
      const THREE = await import('three')

      // Scene setup
      const scene: ThreeScene = new THREE.Scene()
      const camera: ThreeCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer: ThreeRenderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
      })
      
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      canvasRef.current!.appendChild(renderer.domElement)

      // Create floating geometric shapes with predefined positions
      const geometries: ThreeGeometry[] = [
        new THREE.IcosahedronGeometry(1, 0),
        new THREE.TorusGeometry(1, 0.4, 16, 100),
        new THREE.OctahedronGeometry(1.2, 0),
        new THREE.SphereGeometry(0.8, 32, 32),
      ]

      const materials: ThreeMaterial[] = [
        new THREE.MeshPhongMaterial({ 
          color: 0x667eea, 
          transparent: true, 
          opacity: 0.7,
          shininess: 100 
        }),
        new THREE.MeshPhongMaterial({ 
          color: 0x764ba2, 
          transparent: true, 
          opacity: 0.7,
          shininess: 100 
        }),
        new THREE.MeshPhongMaterial({ 
          color: 0xf093fb, 
          transparent: true, 
          opacity: 0.7,
          shininess: 100 
        }),
        new THREE.MeshPhongMaterial({ 
          color: 0x4facfe, 
          transparent: true, 
          opacity: 0.7,
          shininess: 100 
        }),
      ]

      const meshes: ThreeMesh[] = []
      const predefinedPositions = [
        { x: -2, y: -1, z: 2 },
        { x: 3, y: 1, z: -1 },
        { x: -1, y: 2, z: 1 },
        { x: 2, y: -2, z: -2 }
      ]

      geometries.forEach((geometry, index) => {
        const mesh: ThreeMesh = new THREE.Mesh(geometry, materials[index])
        mesh.position.x = predefinedPositions[index].x
        mesh.position.y = predefinedPositions[index].y
        mesh.position.z = predefinedPositions[index].z
        scene.add(mesh)
        meshes.push(mesh)
      })

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 2)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 5, 5)
      scene.add(directionalLight)

      camera.position.z = 5

      // Animation
      let animationFrameId: number
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate)

        meshes.forEach((mesh, index) => {
          mesh.rotation.x += 0.01 * (index + 1) * 0.5
          mesh.rotation.y += 0.01 * (index + 1) * 0.3
          
          // Floating animation with consistent values
          mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.005
        })

        renderer.render(scene, camera)
      }

      animate()

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener('resize', handleResize)

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize)
        cancelAnimationFrame(animationFrameId)
        if (canvasRef.current && renderer.domElement) {
          canvasRef.current.removeChild(renderer.domElement)
        }
        geometries.forEach(geo => geo.dispose())
        materials.forEach(mat => mat.dispose())
        renderer.dispose()
      }
    }

    let cleanupFunction: (() => void) | undefined

    initThreeJS().then(cleanup => {
      cleanupFunction = cleanup
    })

    return () => {
      if (cleanupFunction) {
        cleanupFunction()
      }
    }
  }, [isClient])

  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 pointer-events-none opacity-30"
    />
  )
}