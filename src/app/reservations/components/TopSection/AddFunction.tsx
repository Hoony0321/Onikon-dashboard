import { Button, Flex } from "@chakra-ui/react"

const AddFunction = () => {
    return (
        <Flex flexDirection="row" alignItems="center" gap="10px">
            <Button color="green" backgroundColor="#EEEEEE">Accept All</Button>
            <Button color="red" backgroundColor="#EEEEEE">Reject All</Button>
        </Flex>
    )
}

export default AddFunction;