"use client";
import { Flex, Image } from "@chakra-ui/react";
import styles from "./page.module.css";
import Navbar from "@/app/components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";

import { Montserrat,Fredoka} from "next/font/google";
const montserrat=Montserrat({subsets:['latin'],weight:['400','500','600','700']})
const fredoka = Fredoka({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        inset={0}
        pos="relative"
        minH={"650"}
        as="main"
        bgGradient={"linear(120deg,#000 ,blue.500 80%)"}
      >
        <Flex
          wrap={"wrap"}
          gap={6}
          pt={"100px"}
          pb={6}
          // overflowY={"auto"}
          h={"full"}
          // minH={'full'}
          bg={"whiteAlpha.100"}
          backdropFilter={"blur(30px)"}
          
        >
          <Box maxW={600} pl={{lg:10,base:6,sm:4}} pr={{lg:6,base:4}} minW={250} py={4} borderRadius={"md"}>
            <Heading
              py={4}
              className="clip-text"
              bgGradient={"linear(to-r,blue.700,blue.200)"}
              bgClip={"text"}
              size={"2xl"}
              fontFamily={"inherit"}
            >
              Bridge, Swap & Mint
            </Heading>
            <Text fontSize={"4xl"} color={"white"}>
              Your NFTs.
            </Text>
            <Text fontSize={"lg"} lineHeight={"tall"} py={4} color={"gray.200"} className={fredoka.className}>
            X-market is an innovative decentralized application (DApp) that redefines the NFT landscape by combining bridging, minting, and swapping functionalities into a single, user-friendly platform.
            </Text>
          </Box>

          <Box maxW={700} flex={1} pos={"relative"} minW={300}>
            <Image  hideBelow={'md'}
              top={"-6"}
              right={"-2"}
              pos={"absolute"}
              maxW={{lg:180,base:120}}
              alt=""
              src={"/images/nft2.png"}
            />
            <Image maxW={600} w={'full'} alt="" src={"/images/nft1.png"} />
            <Image hideBelow={'md'}
              bottom={"-7"}
              left={"-8"}
              pos={"absolute"}
              maxW={{lg:180,base:120}}
              alt=""
              src={"/images/nft3.png"}
            />
          </Box>
        </Flex>
      </Box>
      <Flex wrap={{lg:'nowrap',base:'wrap'}} className={montserrat.className} justify={'space-evenly'} gap={8} py={{lg:10,base:8}} px={{lg:4,base:2}} my={8} minH={300} borderRadius={'lg'} bg={'black'}>

<Box p={{lg:6,base:4}}  maxW={650} border={'2px'} borderColor={'gray.700'} borderRadius={'xl'}>
<Heading textAlign={'center'} mb={6}>Why Pontis?</Heading>
<Box color={'gray.300'}>
  <Text mb={5} fontSize={{lg:'md',base:'sm'}}>
  Pontis is driven by a commitment to democratize the NFT ecosystem, making it accessible to both newcomers and seasoned enthusiasts. The platform's user-centric approach prioritizes simplicity, security, and interoperability, enabling users to engage with NFTs without the technical complexities often associated with blockchain technology.
</Text>
<Text>

Moreover, Pontis places a strong emphasis on community-building and collaboration. Through its vibrant marketplace and interactive features, users can connect with like-minded individuals, share their creations, and explore the vast world of NFTs together.
  </Text>
</Box>
</Box>

<Box bg={'black'} border={'2px'} borderColor={'gray.700'} borderRadius={'xl'} py={6}>
<Heading textAlign={'center'}>What it does</Heading>

<Box fontSize={{lg:'md',base:'sm'}}  as={'ul'} lineHeight={'tall'} pos={'relative'} listStyleType={'none'} p={{lg:6,base:4}}>
  <Box pos={'absolute'} h={{lg:'63%',base:'68%'}} bg='brand.400' w='1px' left={{lg:8,base:6}} top={{lg:8,base:6}} transform='translateY(-0%)' ></Box>

<Text as={'li'} mb={4} pos={'relative'} pl={'1.5rem'} _before={{pos:'absolute',w:'1rem',h:'1rem',borderRadius:'full',bg:'brand.400',left:0,top:2,transform:'translateY(-0%)',content:`''`}}>
<Text as={'span'} fontWeight={'semibold'}>

Bridging: </Text>  
<Text color={'gray.300'} as={'span'}>

 Pontis breaks down barriers by offering a sophisticated bridge that seamlessly connects NFTs across multiple blockchains. Whether you're moving NFTs from Ethereum to Binance Smart Chain or any other compatible chain, Pontis ensures a secure and efficient transition.

</Text>
</Text>
  
<Text as={'li'} mb={4} pos={'relative'} pl={'1.5rem'} _before={{pos:'absolute',w:'1rem',h:'1rem',borderRadius:'full',bg:'brand.400',left:0,top:2,transform:'translateY(-0%)',content:`''`}}>

<Text as={'span'} fontWeight={'semibold'}>

Minting: </Text>  
<Text color={'gray.300'} as={'span'}>

Creating NFTs has never been more accessible. Pontis empowers artists, creators, and collectors to mint their digital creations into NFTs effortlessly. With customizable attributes and metadata, the platform allows for a personalized touch that truly captures the essence of each NFT.
</Text>
</Text>
  
<Text as={'li'} mb={4} pos={'relative'} pl={'1.5rem'} _before={{pos:'absolute',w:'1rem',h:'1rem',borderRadius:'full',bg:'brand.400',left:0,top:2,transform:'translateY(-0%)',content:`''`}}>


<Text as={'span'} fontWeight={'semibold'}>
  Swapping: </Text>
  <Text color={'gray.300'} as={'span'}>
    The NFT landscape is characterized by its diversity, and Pontis celebrates this diversity by enabling users to easily swap NFTs across various networks. Whether it's trading, selling, or exchanging NFTs, the platform's intuitive interface ensures a frictionless experience.

    </Text> 
</Text>
</Box>
</Box>
      </Flex>
      <Footer/>
    </>
  );
}
