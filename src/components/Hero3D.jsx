import { Suspense, useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import { quickHighlights, schoolInformation } from '../data/schoolData'

const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

const CampusScene = ({ mobile, reduceMotion }) => {
  const objects = useMemo(
    () =>
      (mobile ? [0, 1, 2, 3] : [0, 1, 2, 3, 4, 5]).map((id) => ({
        id,
        x: (id - 2) * 1.2,
        y: id % 2 ? 0.8 : 1.3,
        z: -1 - id * 0.2,
      })),
    [mobile]
  )

  useFrame((state) => {
    if (reduceMotion) return
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.35,
      0.03
    )
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1.4 + state.pointer.y * 0.2,
      0.03
    )
    state.camera.lookAt(0, 0.4, 0)
  })

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 3]} intensity={1} castShadow />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#77b67b" />
      </mesh>

      <Float speed={reduceMotion ? 0 : 0.9} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[0, 0.8, 0]} castShadow>
          <boxGeometry args={[2.8, 1.2, 1.4]} />
          <meshStandardMaterial color="#f5f9f7" roughness={0.2} />
        </mesh>
      </Float>

      <mesh position={[0, 1.6, 0.65]} castShadow>
        <boxGeometry args={[2.7, 0.2, 0.1]} />
        <meshStandardMaterial color="#0b3d2e" />
      </mesh>

      <mesh position={[-1.1, 0.2, 0.9]} castShadow>
        <boxGeometry args={[0.55, 0.45, 0.8]} />
        <meshStandardMaterial color="#f4b942" />
      </mesh>

      {objects.map((obj) => (
        <Float
          key={obj.id}
          speed={reduceMotion ? 0 : 0.8}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh position={[obj.x, obj.y, obj.z]} castShadow>
            {obj.id % 2 ? <sphereGeometry args={[0.2, 24, 24]} /> : <boxGeometry args={[0.28, 0.28, 0.28]} />}
            <meshStandardMaterial color={obj.id % 2 ? '#167c5a' : '#f4b942'} />
          </mesh>
        </Float>
      ))}
      <Environment preset="park" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={!reduceMotion} autoRotateSpeed={0.15} />
    </>
  )
}

const Hero3D = () => {
  const [webgl, setWebgl] = useState(true)
  const [mobile, setMobile] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setWebgl(isWebGLAvailable())
    const handleResize = () => setMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="relative min-h-screen overflow-hidden bg-forest text-white">
      <div className="absolute inset-0">
        {webgl ? (
          <Canvas shadows camera={{ position: [0, 1.6, mobile ? 5.8 : 4.9], fov: mobile ? 62 : 50 }}>
            <Suspense fallback={null}>
              <CampusScene mobile={mobile} reduceMotion={!!reduceMotion} />
            </Suspense>
          </Canvas>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80"
            alt="Garden Public School campus"
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/50" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm"
          >
            <BadgeCheck size={14} className="text-gold" /> {schoolInformation.badge}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
          >
            Shaping Young Minds For a <span className="text-gold">Brighter Tomorrow</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-xl text-base text-white/90 sm:text-lg"
          >
            {schoolInformation.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/about" className="rounded-full bg-gold px-6 py-3 font-semibold text-forest hover:brightness-95">
              Explore Our School
            </Link>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Apply for Admission <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3"
          >
            {quickHighlights.map((item) => (
              <div key={item.title} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <item.icon size={16} className="text-gold" />
                <span>{item.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-lightGreen">
        <Leaf size={24} aria-label="Scroll down" />
      </div>
    </header>
  )
}

export default Hero3D
