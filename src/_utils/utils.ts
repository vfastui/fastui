const RandomId = (prefix: string, len: number) => prefix + Math.random().toString(36).substr(3, len)
export { RandomId }
