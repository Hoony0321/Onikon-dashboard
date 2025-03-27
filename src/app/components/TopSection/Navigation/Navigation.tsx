import { Flex } from "@chakra-ui/react"
import Logo from "@/src/app/common/Logo"
import UserProfile from "@/src/app/components/TopSection/Navigation/UserProfile"
const Navigation = () => {
    return (
        <Flex justifyContent="space-between" alignItems="center" mx="auto" w="100%">
            <Logo />
            <UserProfile />
        </Flex>
    )
}

export default Navigation;