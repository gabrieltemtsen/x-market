"use client";
import CollectionCards from "@/app/components/CollectionCards";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import NotConnected from "@/app/components/NotConnected";
import PageWrap from "@/app/components/PageWrap";
import { removeCollection } from "@/app/state/slices";
import { RootState } from "@/app/state/store";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useChainModal } from "@rainbow-me/rainbowkit";
import isEmpty from "just-is-empty";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector} from 'react-redux'
import { Chain, useAccount, useConnect, useNetwork,useSwitchNetwork } from "wagmi";



const BridgePage = () => {
  const { openChainModal } = useChainModal();
  const { chain } = useNetwork();
  const { chains } = useSwitchNetwork();
  const { address,isConnected } = useAccount();
  const [departureData,setDepartureData]=useState({chainId:null,address:''})
  const [destinationData,setDestinationData]=useState({address:'',chainId:null})
  const [selectedDestinationChain,setSelectedDestinationChain]=useState('');
  const [selectedDepartureChain,setSelectedDepartureChain]=useState(chain?.name);

const dispatch=useDispatch()
  const selectedCollections=useSelector<RootState,any[]>((state)=>state.bridgeCollection.data)

  console.log({address,isConnected,chains,chain});
  const handleDestinationAddressChange=(evt:ChangeEvent<HTMLInputElement>)=>{

  }
  const handleSelectedDepartureChain=(evt:MouseEvent<HTMLButtonElement>,chain:Chain)=>{
    setSelectedDepartureChain(chain?.name);
      const target = evt.target as HTMLButtonElement;
        const { value } = target;
      // setData((prev) => ({ ...prev, chainId:+value }));
    }
  const handleSelectedDestinationChain=(evt:MouseEvent<HTMLButtonElement>,chain:Chain)=>{
    setSelectedDestinationChain(chain?.name);
      const target = evt.target as HTMLButtonElement;
        const { value } = target;
      // setData((prev) => ({ ...prev, chainId:+value }));
    }

    useEffect(()=>{
setSelectedDepartureChain(chain?.name)
    },[chain])
  return (
    <>
      <Navbar />
    <NotConnected isConnected={isConnected}>

      <PageWrap>
        <Box mx={"auto"} mt={"90px"} maxW={"1350px"} mb={6}>
          <Flex px={{ base: 4, lg: 6 }} wrap={"wrap"} gap={6} mx={"auto"}>
            <Box
              maxW={910}
              mb={6}
              boxShadow={"base"}
              pb={6}
              borderRadius={"lg"}
              bg={"blackAlpha.500"}
            >
              <Flex
                gap={6}
                bg={"brand.900"}
                p={4}
                borderTopRadius={"lg"}
                mb={4}
                align={"center"}
              >
                <Text fontSize={"xl"} as="strong" letterSpacing={"wider"}>
                  Your NFTs on{" "}
                </Text>
               

              <Menu >
    <MenuButton  border={"1px"}
                    fontWeight={"medium"}
                    borderColor={"gray.500"}
                    borderRadius={"full"}
                    minW={"120px"}
                    px={6}
                    py={2}
                    bg={"gray.800"} 
                  >{selectedDepartureChain || 'Select Chain'}</MenuButton>
    <MenuList>
      {chains.map((c,i)=>
      
        <MenuItem key={'d-chain'+i} onClick={(evt)=>handleSelectedDepartureChain(evt,c)} name="chain" value={c?.id}>{c?.name}</MenuItem>
      )}
        
    </MenuList>
</Menu>
              </Flex>
              <CollectionCards collections={[0,1,2,3]} />
            </Box>

            <Box
              flex={1}
              minW={350}
              boxShadow={"base"}
              borderRadius={"lg"}
              bg={"black"}
              maxW={450}
            >
              <Flex
                gap={6}
                bg={"brand.900"}
                p={4}
                borderTopRadius={"lg"}
                mb={4}
                align={"center"}
              >
                <Text fontSize={"lg"} as="strong" letterSpacing={"wider"}>
                  Destination Chain{" "}
                </Text>
                <Menu >
    <MenuButton  border={"1px"}
                    fontWeight={"medium"}
                    borderColor={"gray.500"}
                    borderRadius={"full"}
                    minW={"120px"}
                    px={6}
                    py={2}
                    bg={"gray.800"} 
                  >{selectedDestinationChain || 'Chain'}</MenuButton>
    <MenuList>
      {chains.map((c,i)=>{
      if(c?.id!==chain?.id) return <MenuItem key={'destination-chain'+i} onClick={(evt)=>handleSelectedDestinationChain(evt,c)} name="chain" value={c?.id}>{c?.name}</MenuItem>
})}
        
    </MenuList>
</Menu>
              </Flex>
              <Box 
              p={4}
              >

              <Stack my={4} minH={200} rounded={"lg"}>
                <Box mb={6}>
                  <FormLabel htmlFor='dest-addr'>Enter Destination Address:</FormLabel>
                  <Input id='dest-adr' border={"1px"}
                    // fontWeight={"medium"}
                    borderColor={"gray.500"}
                    borderRadius={"full"}
                    minW={"120px"}
                    px={6} onChange={handleDestinationAddressChange}
                    py={2} placeholder="Destination Address" />
                </Box>
                {!isEmpty(selectedCollections) ? selectedCollections.map((coll)=>{
                  
              return  <Flex key={crypto.randomUUID()}
                justify={"space-between"}
                  align={"center"}
                  p={3}
                  rounded={"xl"}
                  bg={"gray.800"}
                >
                  <Text
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                  >
                   collection {coll}
                  </Text>
                  {/* <IconButton
                    variant={"ghost"}
                    icon={<MdDeleteOutline />}
                    aria-label="delete"
                  /> */}
                </Flex>
              }) :
              
                <Flex
                justify={"space-between"}
                align={"center"}
                px={3}
                  py={6}
                  rounded={"xl"}
                  bg={"gray.800"}
                >
                  <Text color={'gray.300'}
fontSize={'xl'}
>
                    No selected collections
                  </Text>
                 
                </Flex>
              }
                    </Stack>
              <Flex w={"full"}>
                <Button
                  w={"full"}
                  mx={"auto"}
                  maxW={350}
                  size={"lg"}
                  rounded={"full"}
                  variant={"outline"}
                  letterSpacing={"widest"}
                >
                  Continue Bridging
                </Button>
              </Flex>
            </Box>
            </Box>

          </Flex>
        </Box>
      </PageWrap>
      <Footer/>
    </NotConnected>

    </>
  );
};

export default BridgePage;
