import { motion } from "framer-motion";

interface NexusLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  withText?: boolean;
  animated?: boolean;
  className?: string;
}

const NexusLogo = ({ size = "md", withText = false, animated = true, className = "" }: NexusLogoProps) => {
  const sizeMap = {
    sm: { container: "w-6 h-6", svg: 20, textSize: "text-sm" },
    md: { container: "w-8 h-8", svg: 24, textSize: "text-base" },
    lg: { container: "w-10 h-10", svg: 28, textSize: "text-lg" },
    xl: { container: "w-14 h-14", svg: 32, textSize: "text-xl" },
  };

  const { container, svg, textSize } = sizeMap[size];

  const LogoSVG = () => (
    <svg width={svg} height={svg} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 16L16 6L26 16L16 26Z" stroke="#00ff41" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className={`${container} flex items-center justify-center flex-shrink-0`}
        style={{ filter: "drop-shadow(0 0 8px #00ff41)" }}
        animate={animated ? { opacity: [1, 0.8, 1] } : {}}
        transition={animated ? { duration: 3, repeat: Infinity } : {}}
      >
        <LogoSVG />
      </motion.div>
      {withText && (
        <span className={`${textSize} font-black text-white tracking-wider`}>NEXUS</span>
      )}
    </div>
  );
};

export default NexusLogo;
