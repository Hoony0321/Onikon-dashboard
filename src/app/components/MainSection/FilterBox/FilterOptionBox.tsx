import { Checkbox, Flex, Text, VStack } from "@chakra-ui/react";
import SpaceBox from "@/src/app/common/SpaceBox";
interface FilterOptionBoxProps {
    title: string;
    options: string[];
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const FilterOption = ({ option, selectedOption, setSelectedOption }: { option: string, selectedOption: string | null, setSelectedOption: (option: string | null) => void }) => {
    const isSelected = selectedOption === option;

    return (
        <Checkbox.Root variant="outline" checked={isSelected} onCheckedChange={() => setSelectedOption(option === selectedOption ? null : option)}>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label fontSize="16px" fontWeight="normal" color="#999999" _checked={{ color: "#000000" }}>{option}</Checkbox.Label>
        </Checkbox.Root>
    )
}

const FilterOptionBox = ({ title, options, selectedOption, setSelectedOption }: FilterOptionBoxProps) => {
    return <Flex flexDirection="column">
        <Text fontSize="20px" fontWeight="medium" color="#777777">{title}</Text>
        <SpaceBox height="10px" />
        <VStack gap="10px" alignItems="flex-start">
            {options.map((option) => (
                <FilterOption key={option} option={option} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            ))}
        </VStack>
    </Flex>
}

export default FilterOptionBox;