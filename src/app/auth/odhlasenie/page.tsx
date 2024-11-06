import { signOut } from 'next-auth/react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const metadata = { title: 'Odhlasenie | David IG' };

export default function SignOut() {
  return (
    <Container>
      <Typography>Odhlasenie</Typography>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
    </Container>
  );
}
