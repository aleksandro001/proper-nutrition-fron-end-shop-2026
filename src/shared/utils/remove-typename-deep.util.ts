export const removeTypenameDeep = <T>(value: T): T => {
  if (Array.isArray(value)) {
    return value.map(removeTypenameDeep) as T
  }

  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([key]) => key !== '__typename')
      .map(([key, nestedValue]) => [key, removeTypenameDeep(nestedValue)])

    return Object.fromEntries(entries) as T
  }

  return value
}
