import { Flex, Box, Button, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useDebouncedFunction } from "../lib/hooks";
const navbarLinks = [
  {
    title: "Home",
    url: "/",
  },
  { title: "Bridge", url: "/bridge" },
  { title: "Mint", url: "/mint" },
  {
    title: "History",
    url: "/history",
  },
];
const Navbar = () => {
  const pathname = usePathname();
const [scrollY,setScrollY]=useState(0);
  const handleScroll=()=>{
const _scrollY=window.scrollY;

setScrollY(_scrollY)
  }
  const debounceScroll=useDebouncedFunction(handleScroll);
useEffect(()=>{
window.addEventListener('scroll',debounceScroll);
  return ()=>window.removeEventListener('scroll',debounceScroll)
},[scrollY])
const styleForScroll=scrollY > 70?{bg:'whiteAlpha.400',backdropFilter:'blur(25px)',transition:'0.3s ease-out'}:{}
  return (
    <Flex
      zIndex={12}
      left={0}
      top={0}
      {...styleForScroll}
      
      align={"center"}
      width={"100%"}
      pos={"fixed"}
      justify={"space-between"}
      px={{ base: 4, lg: "7" }}
      py={4}
    >
      <Box color={"brand.300"}><Image src={'/logo.svg'} alt="logo" maxW={'90'}/></Box>
      <Flex gap={8}>
        {navbarLinks.map((lnk, i) => (
          <Button
            key={"nav-link" + i}
            pos={"relative"}
            px={2}
            _hover={{ _before: { w: "60%" } }}
            _before={{
              content: `''`,
              pos: "absolute",
              bottom: 0,
              transition: "0.4s ease-out",
              left: "50%",
              transform: "translateX(-50%)",
              w: pathname === lnk.url ? "60%" : "0",
              h: "0.25em",
              bg: "brand.300",
              borderRadius: "4",
            }}
            fontWeight={"medium"}
            letterSpacing={"wider"}
            color={"white"}
            bg={"transparent!important"}
            borderRadius={"full"}
            colorScheme={"purple"}
            as={NextLink}
            href={lnk.url}
            fontSize={"lg"}
          >
            {lnk.title}
          </Button>
        ))}
      </Flex>
      <Box>
        <Box className="connect-btn-wrap">
          <ConnectButton />
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
