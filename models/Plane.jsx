import { useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF('/3d/plane.glb');

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Plane;
