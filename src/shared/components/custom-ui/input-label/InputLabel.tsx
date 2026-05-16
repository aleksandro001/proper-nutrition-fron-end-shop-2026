import { Input } from '../../ui/input'
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
      <span className="text-foreground mb-1.5 block text-sm opacity-50">
        {label}
      </span>
      <Icon
        size={16}
        className="absolute bottom-2 left-3 opacity-50"
      />
      <Input
        type={type}
        className={cn(className, 'rounded-2xl bg-[#ececec] pl-9')}
        {...props}
      />
    </label>
  )
}
