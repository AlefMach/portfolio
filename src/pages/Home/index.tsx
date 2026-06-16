import { Box } from "@mui/material";
import { lazy, Suspense } from "react";

import { Hero } from "../../components/sections/Hero";

const About = lazy(() =>
  import("../../components/sections/About").then((module) => ({
    default: module.About,
  })),
);
const Experience = lazy(() =>
  import("../../components/sections/Experience").then((module) => ({
    default: module.Experience,
  })),
);
const Projects = lazy(() =>
  import("../../components/sections/Projects").then((module) => ({
    default: module.Projects,
  })),
);
const Differentiators = lazy(() =>
  import("../../components/sections/Differentiators").then((module) => ({
    default: module.Differentiators,
  })),
);
const TechStack = lazy(() =>
  import("../../components/sections/TechStack").then((module) => ({
    default: module.TechStack,
  })),
);
const Exploring = lazy(() =>
  import("../../components/sections/Exploring").then((module) => ({
    default: module.Exploring,
  })),
);
const Contact = lazy(() =>
  import("../../components/sections/Contact").then((module) => ({
    default: module.Contact,
  })),
);

export default function Home() {
  return (
    <Box component="main" sx={{ flex: 1 }}>
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Experience />
        <Projects />
        <Differentiators />
        <TechStack />
        <Exploring />
        <Contact />
      </Suspense>
    </Box>
  );
}
