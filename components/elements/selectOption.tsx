import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IOption } from "@/interfaces/global";
import * as SelectPrimitive from "@radix-ui/react-select";

interface ISelectOption extends SelectPrimitive.SelectProps {
  placeholder?: string;
  options: IOption[];
}

export default function SelectOption({
  placeholder,
  options = [],
  ...props
}: ISelectOption) {
  return (
    <Select {...props}>
      <SelectTrigger className="w-auto lg:w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="scroll-auto max-h-48">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
