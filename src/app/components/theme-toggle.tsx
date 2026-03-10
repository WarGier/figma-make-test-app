import { Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-200 border border-foreground/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0.8 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon size={16} className="text-foreground/70" />
        ) : (
          <Sun size={16} className="text-foreground/70" />
        )}
      </motion.div>
    </motion.button>
  )
}