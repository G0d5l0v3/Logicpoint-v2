import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
  
    // Update cursor position
    const onMouseMove = (event) => {
      cursorX.set(event.clientX - 16); // Adjust for cursor center offset
      cursorY.set(event.clientY - 16);
    };
  
    // Spring animation for smoother movement
    const cursorXSpring = useSpring(cursorX, { stiffness: 500, damping: 20 });
    const cursorYSpring = useSpring(cursorY, { stiffness: 500, damping: 20 });
  
    return (
      <div onMouseMove={onMouseMove}>
        {/* Element that follows cursor */}
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 10,
            height: 10,
            backgroundColor: "#5D1570",
            borderRadius: "50%",
            zIndex: 9999,
            pointerEvents: "none",
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        />
        
        {/* Other content of your app */}
        <div>
          <h1>Welcome to My App</h1>
          <p>Move your cursor to see the effect!</p>
        </div>
      </div>
    );
  };

export default Cursor;
