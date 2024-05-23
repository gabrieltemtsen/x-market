"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,useToast,Menu,MenuItem,MenuButton,MenuList
} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar";
import ImageDropArea from "@/app/components/ImageDropArea";
import Footer from "@/app/components/Footer";
import {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  MouseEvent,
} from "react";
import PageWrap from "@/app/components/PageWrap";
import { getJSONFromCID, pushImgToStorage, putJSONandGetHash } from "@/app/lib/utils";

import isEmpty from "just-is-empty";
import { Chain, useAccount, useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import NotConnected from "@/app/components/NotConnected";

const MintPage = () => {
  // const { config } = usePrepareContractWrite({
  //   address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
  //   abi: '',
  //   functionName: 'feed',
  // })
  // const { data:writtenData, isLoading, isSuccess, write } = useContractWrite(config)
 
  const [files, setFiles] = useState<File[]>([]);
  const [selectedChainName,setSelectedChainName]=useState('');
  const { chain,chains } = useNetwork();
  const { isConnected } = useAccount();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const toast=useToast({duration:3000,position:'top',})
  const initialData:{chainId:number|null;image:string;name:string;description?:string} = {
    image: "",
    name: "",
    description: "",
    chainId: null,
  };
  const [data, setData] = useState(initialData);
  const onUploadChange = (_hasImage: boolean, files: File[]) => {
    setHasImage(_hasImage);
    setFiles(files);
  };
  async function handleFormSubmit(evt: FormEvent<HTMLDivElement>) {
    evt.preventDefault();

    try {
      setIsSubmitting(true);
      // // upload the image first and get it's CID
      const imageCid = await pushImgToStorage(files[0]);
      const newData = { ...data, image: `https://${imageCid}.ipfs.w3s.link` };
      console.log({ imageCid, newData });

      const cid = await putJSONandGetHash(newData);
      console.log({ details: cid });

      // const response = await getJSONFromCID('bafkreibtojt5ockm7nfxlxgm62d57o6qmxwnz3v5rxr4dg2qv5exge25fq')
      // console.log({ response});
      setData(initialData);
      setIsSubmitting(false);
      toast({title:'NFT created successfully',status:'success'})
    } catch (error) {
      setIsSubmitting(false);
      toast({title:'An error occurred, please try again',status:'error'})
      console.log("error", error);
    }
  }
  function handleInputChange(
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    const target = evt.target;
   
    const { name, value } = target;

    setData((prev) => ({ ...prev, [name]: name==='chain'?+value: value }));
    console.log(data);
  }
const handleSelectedChain=(evt:MouseEvent<HTMLButtonElement>,chain:Chain)=>{
setSelectedChainName(chain?.name);
  const target = evt.target as HTMLButtonElement;
    const { value } = target;
  setData((prev) => ({ ...prev, chainId:+value }));
}
  useEffect(() => {
    if ((data.chainId!==null && !isEmpty(data.chainId+'')) && !isEmpty(data.name) && hasImage) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [data.chainId, data.name, hasImage,files]);

  return (
    <>
      <Navbar />
      <NotConnected isConnected={isConnected}>


      <PageWrap>
        <Box
          mx={"auto"}
          boxShadow={"md"}
          mb={{ base: 6, lg: 8 }}
          maxW={950}
          borderRadius={{ base: "md", lg: "lg" }}
          mt={"90px"}
          minH={"400"}
          bg={"blackAlpha.800"}
        >
          <Box
            mt={"calc(2rem + var(--navbar-height))"}
            maxW={800}
            mx={"auto"}
            py={8}
            px={4}
          >
            <Heading textAlign={"center"} mt={8} mb={8}>
              Create
            </Heading>
            <FormControl onSubmit={(evt) => handleFormSubmit(evt)} as={"form"}>
              <FormLabel fontSize={"lg"} htmlFor="image-select">
                Image
                <Text as={"span"} color={"red.500"}>
                  *
                </Text>
              </FormLabel>
              <Text fontSize={"smaller"} mb={2}>
                Drag or choose your file to upload
              </Text>
              <Box minH={"180px"}>
                <ImageDropArea onUploadChange={onUploadChange} />
              </Box>
              <FormLabel mt={4} htmlFor="name-inp">
                Name
                <Text as={"span"} color={"red.500"}>
                  *
                </Text>
              </FormLabel>
              <Input
                required
                value={data.name}
                minH={12}
                name="name"
                onChange={handleInputChange}
                id="name-inp"
                placeholder="Item name"
                autoComplete="off"
                mb={4}
                //   _focus={{ borderColor: 'brand.600',outlineColor:'brand.600' }}
              />
              <FormLabel mt={4} htmlFor="desc">
                Description
              </FormLabel>
              <Text fontSize={"smaller"} mb={2}>
                The description will be included on the item's detail page
                underneath its image.
              </Text>
              <Textarea
                my={4}
                onChange={handleInputChange}
                placeholder="Provide a detailed description of your item"
                minH={36}
                maxH={"400px"}
                name="description"
                id="desc"
                resize={"none"}
                // _focusVisible={{ borderColor: 'teal.600' }}
                //   _focus={{ borderColor: 'brand.600' }}
              />
              <FormLabel mt={4} htmlFor="blockchain-inp">
                BlockChain
                {/* <Text as={'span'} color={'red.500'}>
                          *
                        </Text> */}
              </FormLabel>
<Box >

              <Menu >
    <MenuButton type="button" id="blockchain-inp"  py={3} border={"1px"} name="chain"
                    // fontWeight={"medium"}
                    borderColor={"gray.700"}
                    borderRadius={"md"}
                    minW={"180px"}
                    my={4}
                    display={'inline-block'}
                    px={6}>{selectedChainName || 'Select Chain'}</MenuButton>
    <MenuList>
      {chains.map((c,i)=>
      
        <MenuItem key={'chain'+i} onClick={(evt)=>handleSelectedChain(evt,c)} name="chain" value={c?.id}>{c?.name}</MenuItem>
      )}
        
    </MenuList>
</Menu>
</Box>
            
              <Button
                type="submit"
              
                size={"lg"}
                minW={160}
                mt={6}
                isDisabled={!isValid}
                borderRadius={50}
                isLoading={isSubmitting}
                variant={'outline'}
                loadingText="Creating your nft..."
                //   _hover={{ bg: 'purple.300', color: 'purple.700' }}
                //   bg={'purple.700'}
              >
                Create
              </Button>
            </FormControl>
          </Box>
        </Box>
      </PageWrap>
      </NotConnected>

        <Footer />
    </>
  );
};


export default MintPage;
