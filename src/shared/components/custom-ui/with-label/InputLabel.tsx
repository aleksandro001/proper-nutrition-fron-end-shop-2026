import { Input } from '../../ui/input'
import { LabelIcon } from './LabelIcon'
import { cn } from '@/shared/utils'
import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'input'> {
  label: string
  Icon: LucideIcon
}

export function InputLabel({ label, Icon, className, type, ...props }: Props) {
  return (
    <label className="relative block">
      <LabelIcon
        label={label}
        Icon={Icon}
      />
      <Input
        type={type}
        className={cn(className, 'rounded-2xl bg-[#ececec] pl-9')}
        {...props}
      />
    </label>
  )
}
