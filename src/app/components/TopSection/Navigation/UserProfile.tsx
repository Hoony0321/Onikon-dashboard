"use client"
import { Circle, Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import { MdPerson } from "react-icons/md";
import SpaceBox from "@/src/app/common/SpaceBox";

const UserProfile = () => {
    const isMobile = useBreakpointValue({base: true, md: false});
    return (
        <Flex flexDirection="row" alignItems="center">
            
            <Flex flexDirection="column" alignItems="flex-end">
                <Text fontSize={isMobile ? "12px" : "16px"} fontWeight="bold">User Name</Text>
                <Text fontSize={isMobile ? "10px" : "12px"} fontWeight="normal">System Admin</Text>
            </Flex>
            <SpaceBox width="15px" />
            <Circle size={isMobile ? "30px" : "40px"} bg="gray.200">
                <MdPerson size={isMobile ? "18px" : "24px"} />  
            </Circle>
        </Flex>
        
    )
}

export default UserProfile;