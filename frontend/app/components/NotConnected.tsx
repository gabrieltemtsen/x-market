import { Flex, Heading, Text } from "@chakra-ui/react"
import { ReactNode } from "react"


const NotConnected=({isConnected=false,children}:{isConnected:boolean,children:ReactNode})=>{


    return (
        <>
{isConnected? [children]:
        <Flex justify={'center'} align={'center'} minH={'100vh'}>
            <div>

            <Heading size={'3xl'} mb={4}>Connect your wallet</Heading>
            <Text fontSize={'lg'} textAlign={'center'} color={'gray.400'}>You need to connect your wallet in other to view this page. </Text>
            </div>
        </Flex>
}
        </>
    )
}


export default NotConnected