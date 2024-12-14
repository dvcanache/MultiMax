import { motion, AnimatePresence } from "framer-motion";

const ResponsiveAnimation = ({ open, children }: { open: boolean, children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sticky top- left-0 right-0 w-full z-50"
          >
            <>
                {children}
            </>
          </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveAnimation;
