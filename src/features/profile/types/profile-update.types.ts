import type { UserUpdateCustomInput } from '@/__generated__/graphql'

export type TProfileForm = Omit<UserUpdateCustomInput, 'password'>
