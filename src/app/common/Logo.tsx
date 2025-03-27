'use client'
import BaseLink from "./BaseLink";
import { Text, useBreakpointValue } from "@chakra-ui/react";

const Logo = () => {
    const isMobile = useBreakpointValue({base: true, md: false});
    return (
        <BaseLink href="/">
            <Text fontSize={isMobile ? "16px" : "2xl"} fontWeight="bold" color="white">Onikon Dashboard</Text>
        </BaseLink>
    )
}

export default Logo;