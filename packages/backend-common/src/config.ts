function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

// Auth settings are grouped under the AUTH_ prefix so they sort together in
// the Railway variables panel and can't collide with platform-provided vars.
export const JWT_SECRET: string = required("AUTH_JWT_SECRET");
