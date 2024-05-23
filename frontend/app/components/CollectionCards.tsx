import { Box, Flex, Text } from "@chakra-ui/react";
import CollectionCard from "./CollectionCard";
import isEmpty from "just-is-empty";

const CollectionCards = ({collections=[0,1,2,3]}:{collections:any}) => {
  return (
    <Flex minH={450} py={4} px={4} gap={"4"} wrap={"wrap"}>
        {isEmpty(collections)
        ?
        <Box mx={'auto'} p={6}>
<Text textAlign={'center'} fontSize={'3xl'}>You Don't have any NFTs yet</Text>
        </Box>
    :
        collections.map((collection:any,i:number) => (
            <CollectionCard collection={collection} key={'collection-'+i}/>
            ))}
        
    </Flex>
  );
};

export default CollectionCards;
