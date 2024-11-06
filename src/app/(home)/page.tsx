// src/app/(home)/page.tsx
import Typography from "@mui/material/Typography";
import AccountMenu from "../../components/Menu"; // Import AccountMenu component

export const metadata = { title: 'Domov | David IG' };

export default function Home() {
  return (
    <div>
      {/* Include the AccountMenu Component directly in the Home page */}
      <AccountMenu /> 

      {/* The rest of your home page content */}
    </div>
  );
}
