import { Box, Checkbox, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addCollection, removeCollection } from "@/app/state/slices";
import { RootState } from "@/app/state/store";

const CollectionCard = ({ collection }: { collection: any }) => {
  
  const selectedCollections=useSelector<RootState,any[]>((state)=>state.bridgeCollection.data)
  const dispatch=useDispatch()
  const [isChecked, setIsChecked] = useState(false);
  const [canDisable, setCanDisable] = useState(false);
  const handleCheck = (collection: any) => {
const _isChecked=isChecked;
if(_isChecked){
  dispatch(removeCollection(collection))
    }
    else{
      dispatch(addCollection(collection))
    }
    setIsChecked(!_isChecked);
  };
useEffect(()=>{
selectedCollections.length >= 1 ?
  setCanDisable(true):setCanDisable(false)

},[selectedCollections])
  const stylesWhenDisabled=!isChecked && canDisable? {cursor:'not-allowed',pointerEvents:'none', opacity:0.5}: {cursor:"pointer"}
  return (
    //@ts-ignore
    <Flex
      onClickCapture={() => handleCheck(collection)}
      // cursor={"pointer"}
      border={"4px"}
      {...stylesWhenDisabled}
      borderColor={isChecked ? "brand.600" : "transparent"}
      pos={"relative"}
      
      direction={"column"}
      p={3}
      boxShadow={"md"}
      borderRadius={"2xl"}
      bg={"black"}
      
    >
      <Checkbox
        onChange={() => handleCheck(collection)}
        isChecked={isChecked}
        bg={"gray.700"}
        size={"lg"}
        pos={"absolute"}
      />
      <Box
        overflow={"hidden"}
        bg={"gray.400"}
        h={200}
        borderRadius={"inherit"}
        w={250}
      >
        <Image
          h={"full"}
          w={"full"}
          alt=""
          src="/images/nft.jpg"
          objectFit={"cover"}
        />
      </Box>
      <Box mt={4}>
        <Box>
          <Text as={"strong"}>Tin tin NFT</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default CollectionCard;
