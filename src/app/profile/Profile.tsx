import { useGetProfileQuery } from "@/__generated__output"

export const Profile = () => {
  const {data} =  useGetProfileQuery()
  return <div>Profile</div>
}