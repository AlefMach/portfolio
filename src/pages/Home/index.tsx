import { Box } from "@mui/material";

import { About } from "../../components/sections/About";
import { BuildProcess } from "../../components/sections/BuildProcess";
import { Contact } from "../../components/sections/Contact";
import { Exploring } from "../../components/sections/Exploring";
import { Hero } from "../../components/sections/Hero";
import { Projects } from "../../components/sections/Projects";
import { TechStack } from "../../components/sections/TechStack";

export default function Home() {
  return (
    <Box component="main" sx={{ flex: 1 }}>
      <Hero />
      <About />
      <Projects />
      <BuildProcess />
      <TechStack />
      <Exploring />
      <Contact />
    </Box>
  );
}
