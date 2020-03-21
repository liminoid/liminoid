import React from 'react';
import { Box, Link } from 'rebass';

export default props => (
  <Box as="footer" py={5} color="background" bg="text">
    <Box
      sx={{
        maxWidth: 'wide',
        mx: 'auto',
        px: 3
      }}
    >
      <Link href="https://github.com/liminoid" variant="nav">
        Github
      </Link>
      <Link
        href="https://matrix.to/#/!CPoHZRWLrkbgPuzGpU:matrix.org/$cw1qJZO_Ykr4rPF5_Of3OXGg_4j8E4LkqdkFqGFGA_U?via=matrix.org"
        variant="nav"
      >
        Chat
      </Link>
      <Link href="https://twitter.com/liminoid_io" variant="nav">
        Twitter
      </Link>
      <Link
        href="https://stackoverflow.com/questions/tagged/liminoid"
        variant="nav"
      >
        Stack Overflow
      </Link>
      <Link href="/colophon" variant="nav">
        Colophon
      </Link>
      <Link href="/license" variant="nav">
        License
      </Link>
    </Box>
  </Box>
);
