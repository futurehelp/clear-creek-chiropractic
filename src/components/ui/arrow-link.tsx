import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ArrowLinkProps = {
  children: ReactNode;
  href?: string;
};

/** Secondary link treatment used consistently across every section. */
export function ArrowLink({ children, href = "#appointment" }: ArrowLinkProps) {
  return (
    <motion.a className="under" href={href} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
      {children} <ArrowRight size={16} />
    </motion.a>
  );
}
