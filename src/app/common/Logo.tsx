import BaseLink from "./BaseLink";
import { Text } from "@chakra-ui/react";

const Logo = () => {
    return (
        <BaseLink href="/">
            <Text fontSize="2xl" fontWeight="bold" color="white">Onikon Dashboard</Text>
        </BaseLink>
    )
}

export default Logo;