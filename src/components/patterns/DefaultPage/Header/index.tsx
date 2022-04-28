import Logo from "components/Logo";
import SearchBar from "components/SearchBar";
import MenuButton from "components/buttons/MenuButton";
import {Box, Image, Text} from "theme/components";

export default function Header() {
  return (
    <
      // @ts-ignore
      Box
      styleSheet={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        marginTop: '16px',
        gridGap: '16px',
      }}
    >
      <
        // @ts-ignore
        Box
        styleSheet={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '16px',
        }}
      >
        <Logo />
        <SearchBar />
      </Box>
      <
        // @ts-ignore
        Box>
        <MenuButton title="Login" />
      </Box>
    </Box>
  );
}