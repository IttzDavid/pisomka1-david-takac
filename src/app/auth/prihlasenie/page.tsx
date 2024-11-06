import { signIn } from 'next-auth/react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const metadata = { title: 'Prihlasenie | David IG' };

export default function SignIn() {
  return (
    <Container>
      <Typography>Prihlasenie</Typography>
      <button onClick={() => signIn('google')}>Sign In with Google</button>
    </Container>
  );
}
