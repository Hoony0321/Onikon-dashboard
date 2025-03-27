import { Circle, Flex, Text } from "@chakra-ui/react"
import { MdPerson } from "react-icons/md";
import SpaceBox from "@/src/app/common/SpaceBox";

const UserProfile = () => {
    return (
        <Flex flexDirection="row" alignItems="center">
            
            <Flex flexDirection="column" alignItems="flex-end">
                <Text fontSize="16px" fontWeight="bold">User Name</Text>
                <Text fontSize="12px" fontWeight="normal">System Admin</Text>
            </Flex>
            <SpaceBox width="15px" />
            <Circle size="40px" bg="gray.200">
                <MdPerson size="24px" />  
            </Circle>
        </Flex>
        
    )
}

export default UserProfile;