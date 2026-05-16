import { TProfileForm } from '../types/profile-update.types'
import { Ruler, Weight } from 'lucide-react'
import Image from 'next/image'
import { UseFormReturn } from 'react-hook-form'

import { InputLabel } from '@/shared/components/custom-ui/input-label/InputLabel'

const optionalNumber = (value: string) =>
  value.trim() === '' ? undefined : Number(value)

export function BodyMeasurementsForm({
  form
}: {
  form: UseFormReturn<TProfileForm>
}) {
  const { register } = form

  return (
    <div className="flex items-center gap-6 rounded-xl border bg-white p-6">
      <Image
        src="/images/Female.svg"
        alt="Women"
        width={200}
        height={1000}
      />
      <div>
        <h2 className="mb-6 text-lg font-semibold">Body Measurements</h2>

        <div className="grid grid-cols-2 gap-4">
          <InputLabel
            label="Height cm"
            Icon={Ruler}
            placeholder="Height cm"
            type="number"
            {...register('measurement.heightCm', {
              setValueAs: optionalNumber
            })}
          />
          <InputLabel
            label="Weight kg"
            Icon={Weight}
            placeholder="Weight kg"
            type="number"
            {...register('measurement.weightKg', {
              setValueAs: optionalNumber
            })}
          />
          <InputLabel
            label="Goal weight"
            Icon={Weight}
            placeholder="Goal weight"
            type="number"
            {...register('measurement.goalWeightKg', {
              setValueAs: optionalNumber
            })}
          />

          <InputLabel
            placeholder="Chest cm"
            label="Chest cm"
            Icon={Ruler}
            type="number"
            {...register('measurement.chestCm', { setValueAs: optionalNumber })}
          />
          <InputLabel
            label="Waist cm"
            Icon={Ruler}
            placeholder="Waist cm"
            type="number"
            {...register('measurement.waistCm', { setValueAs: optionalNumber })}
          />
          <InputLabel
            label="Thigh cm"
            Icon={Ruler}
            placeholder="Thigh cm"
            type="number"
            {...register('measurement.thighCm', { setValueAs: optionalNumber })}
          />
          <InputLabel
            label="Arm cm"
            Icon={Ruler}
            placeholder="Arm cm"
            type="number"
            {...register('measurement.armCm', { setValueAs: optionalNumber })}
          />
        </div>
      </div>
    </div>
  )
}
