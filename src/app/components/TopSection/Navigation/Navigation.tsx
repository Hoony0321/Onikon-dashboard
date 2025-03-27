'use client'
import { Box, Flex, Text } from "@chakra-ui/react"
import Logo from "@/src/app/common/Logo"
import UserProfile from "@/src/app/components/TopSection/Navigation/UserProfile"
import BaseLink from "@/src/app/common/BaseLink"
import SpaceBox from "@/src/app/common/SpaceBox"
import { usePathname } from "next/navigation"

const NavigationLinkBox = ({isActive, text}: {isActive: boolean, text: string}) => {
    return (
            <Box backgroundColor={isActive ? "#1D2635" : "transparent"} padding="10px 25px" borderRadius="20px">
                <Text fontSize="16px" fontWeight="bold" color={isActive ? "#EEEEEE" : "#c2c2c2"}>{text}</Text>
            </Box>  
        
    )
}

const Navigation = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    return (
        <Flex justifyContent="space-between" alignItems="center" mx="auto" w="100%">
            <Logo />
            <Flex flexDirection="row" alignItems="center" gap="20px">
                <BaseLink href="/">
                    <NavigationLinkBox isActive={isActive("/")} text="Dashboard" />
                </BaseLink>
                <SpaceBox width="20px" />
                <BaseLink href="/reservations">
                    <NavigationLinkBox isActive={isActive("/reservations")} text="Reservations" />
                </BaseLink>
                <SpaceBox width="20px" />
                <BaseLink href="/events">
                    <NavigationLinkBox isActive={isActive("/events")} text="Add&Edit Events" />
                </BaseLink>
                <SpaceBox width="20px" />
                <BaseLink href="/settings">
                    <NavigationLinkBox isActive={isActive("/settings")} text="Settings" />
                </BaseLink>
            </Flex>
            <UserProfile />
        </Flex>
    )
}

export default Navigation;