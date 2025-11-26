import { motion } from "framer-motion";

interface ComputerMockupProps {
  image: string;
  title: string;
  variant?: "laptop" | "desktop";
}

export const ComputerMockup = ({ image, title, variant = "laptop" }: ComputerMockupProps) => {
  if (variant === "desktop") {
    return (
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {/* Monitor Stand */}
        <div className="relative">
          {/* Screen */}
          <div className="bg-black rounded-lg shadow-2xl border-[12px] border-gray-900 overflow-hidden aspect-video">
            <div className="w-full h-full bg-gray-950 p-2">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Monitor Bezel */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b" />

          {/* Stand */}
          <div className="flex justify-center mt-3">
            <div className="w-1/3 h-6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-lg shadow-lg" />
          </div>

          {/* Shadow */}
          <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent blur-sm" />
        </div>
      </motion.div>
    );
  }

  // Laptop variant (default)
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* Laptop Screen */}
      <div className="relative perspective">
        {/* Screen Top Bezel */}
        <div className="bg-gray-800 rounded-t-2xl border-t-[8px] border-l-[8px] border-r-[8px] border-gray-900 pt-2 px-2 shadow-2xl">
          <div className="bg-black rounded-t-lg overflow-hidden aspect-video">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Laptop Keyboard/Base */}
        <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 rounded-b-2xl border-b-[8px] border-l-[8px] border-r-[8px] border-gray-950 py-6 px-4 relative">
          {/* Keyboard pattern */}
          <div className="grid grid-cols-6 gap-1.5 opacity-20">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="h-2 bg-gray-700 rounded-sm" />
            ))}
          </div>

          {/* Trackpad */}
          <div className="mt-4 mx-auto w-1/3 h-6 bg-gray-800 rounded-lg border border-gray-700" />
        </div>

        {/* Laptop Hinge */}
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />

        {/* Shadow */}
        <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-black/30 to-transparent blur-md" />
      </div>
    </motion.div>
  );
};

export default ComputerMockup;
