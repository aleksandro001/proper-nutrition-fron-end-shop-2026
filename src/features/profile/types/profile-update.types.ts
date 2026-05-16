import type { UserUpdateInput } from '@/__generated__/graphql'

export type TProfileForm = Omit<UserUpdateInput, 'password'>
