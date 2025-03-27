'use client'
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import Logo from "@/src/app/common/Logo"
import UserProfile from "@/src/app/components/TopSection/Navigation/UserProfile"
import BaseLink from "@/src/app/common/BaseLink"
import { usePathname } from "next/navigation"

const NavigationLinkBox = ({isActive, text}: {isActive: boolean, text: string}) => {
    const isMobile = useBreakpointValue({base: true, md: false});
    return (
            <Box backgroundColor={isActive ? "#1D2635" : "transparent"} padding="10px 25px" borderRadius="20px">
                <Text fontSize={isMobile ? "12px" : "16px"} fontWeight="bold" color={isActive ? "#EEEEEE" : "#c2c2c2"}>{text}</Text>
            </Box>  
        
    )
}

const Navigation = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const isMobile = useBreakpointValue({base: true, md: false});
    return (
        <Flex justifyContent="space-between" alignItems="center" mx="auto" w="100%">
            <Logo />
            <Flex flexDirection="row" alignItems="center" gap={isMobile ? "10px" : "20px"}>
                <BaseLink href="/">
                    <NavigationLinkBox isActive={isActive("/")} text="Dashboard" />
                </BaseLink>
                
                <BaseLink href="/reservations">
                    <NavigationLinkBox isActive={isActive("/reservations")} text="Reservations" />
                </BaseLink>
                
                <BaseLink href="/events">
                    <NavigationLinkBox isActive={isActive("/events")} text="Add&Edit Events" />
                </BaseLink>
                
                <BaseLink href="/settings">
                    <NavigationLinkBox isActive={isActive("/settings")} text="Settings" />
                </BaseLink>
            </Flex>
            <UserProfile />
        </Flex>
    )
}

export default Navigation;