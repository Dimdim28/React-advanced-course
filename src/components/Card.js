import { Heading, Box, Image, HStack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" color="black" borderRadius="10px">
      <Image src={imageSrc} borderRadius="10px" />
      <Box p={5}>
        <Heading fontSize="sm">{title}</Heading>
        <Text mt={4}>{description}</Text>
        <HStack>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
