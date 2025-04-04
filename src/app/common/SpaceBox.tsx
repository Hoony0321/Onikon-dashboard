import { Box } from "@chakra-ui/react"

const SpaceBox = ({ width = "0px", height = "0px" }: { width?: string, height?: string }) => {
    return <Box w={width} h={height} />
}

export default SpaceBox;