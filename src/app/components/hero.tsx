import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SplineScene } from './ui/spline-scene';
import { Card } from './ui/card';
import { Spotlight } from './ui/spotlight';

export function Hero() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-7xl">
        <Card className="w-full h-[calc(100vh-160px)] md:h-[600px] lg:h-[700px] bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden border-foreground/10">
          <Spotlight className="from-blue-500/20 via-purple-500/20 to-pink-500/20" size={300} />
          
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-6">
                  <Sparkles size={16} className="text-foreground/60" />
                  <span className="text-sm font-medium text-foreground/60">
                    Welcome to the future
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                  Interactive
                </span>
                <br />
                <span className="text-foreground/90">3D Experiences</span>
              </motion.h1>

              <motion.p
                className="text-base lg:text-lg text-foreground/60 max-w-xl mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
                that capture attention and enhance your design with cutting-edge technology.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.button
                  className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-8 max-w-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-foreground/50 mt-1">Users</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">120+</div>
                  <div className="text-sm text-foreground/50 mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">99%</div>
                  <div className="text-sm text-foreground/50 mt-1">Satisfaction</div>
                </div>
              </motion.div>
            </div>

            {/* Right content - 3D Scene */}
            <motion.div
              className="flex-1 relative min-h-[250px] lg:min-h-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/5 pointer-events-none" />
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
}