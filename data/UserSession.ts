export interface User {
  id: string
  address: string
  profileId: string
  username: string
  email: string
  role: string
  image: string
  balance: number
}

export function isAdminRole(user: User): boolean {
  return user.role === "Admin" || user.role === "Founder"
}
