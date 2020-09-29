export default function createLoginUrl(redirectTo) {
  if (redirectTo) {
    return `/api/login/login?redirectTo=${encodeURIComponent(redirectTo)}`;
  }
  return `/api/login/login`;
}
