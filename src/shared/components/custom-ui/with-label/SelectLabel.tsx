import { Input } from '../../ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel as SelectInsideLabel,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../ui/select'
import { LabelIcon } from './LabelIcon'
import { cn } from '@/shared/utils'
import { LucideIcon } from 'lucide-react'

interface Props {
  label: string
  Icon: LucideIcon
  options?: { value: string; label: string }[]
  value?: string | null
  onChange?: (value: string | null) => void
}

export function SelectLabel({
  label,
  Icon,
  onChange,
  value,
  options = []
}: Props) {
  return (
    <label className="relative block">
      <LabelIcon
        label={label}
        Icon={Icon}
      />
      <Select
        value={value || undefined}
        onValueChange={onChange}
      >
        <SelectTrigger className="w-full rounded-2xl pl-9">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent className="bg-[#ececec]">
          <SelectGroup>
            <SelectInsideLabel>{label}</SelectInsideLabel>
            {options.map(option => (
              <SelectItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </label>
  )
}
