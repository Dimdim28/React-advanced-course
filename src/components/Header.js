import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const scroll = useRef(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isIncreasing = (prev, curr) => {
    if (prev > curr) {
      return false;
    } else {
      return true;
    }
  };

  const handleScroll = (e) => {
    const element = document.getElementById("nav-bar-top");
    if (isIncreasing(scroll.current, window.pageYOffset)) {
      scroll.current = window.pageYOffset;
      element.style.transform = "translateY(-200px)";
    } else {
      scroll.current = window.pageYOffset;
      element.style.transform = "translateY(0)";
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", handleScroll);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      id="nav-bar-top"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((el, id) => (
                <a key={id} href={el.url} target="blank">
                  <FontAwesomeIcon icon={el.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")} href="#projects">
                Projects
              </a>
              <a onClick={handleClick("contactme")} href="#contact-me">
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
