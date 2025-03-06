import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/profile.jpg";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-square max-w-md mx-auto"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/5 -z-10 transform rotate-3" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-primary/20 to-primary/5 -z-10 transform -rotate-3" />
                <div className="relative h-full w-full overflow-hidden rounded-xl border">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
              <h3 className="text-2xl font-bold">Solving Problems, Not Just Writing Code</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hi! I'm a software developer who thrives on solving complex
                    problems and building efficient, scalable solutions. I work
                    with multiple programming languages and technologies,
                    adapting to whatever best suits the project.
                  </p>
                  <p>
                    My main focus is on problem-solving, Technology is just a
                    tool to get the job done. Whether it's backend architecture,
                    frontend design, or full-stack development, I strive to
                    create impactful and high-performing applications.
                  </p>
                  <p>
                    When I'm not coding, I'm exploring new challenges,
                    contributing to open-source projects, or refining my skills
                    in different tech stacks. Always open to new opportunities
                    and collaborations that push the boundaries of innovation.
                  </p>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
