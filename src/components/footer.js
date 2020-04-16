import React from 'react';
import { Box, Link } from 'rebass';

export default (props) => (
  <Box as="footer" py={5} color="background" bg="text">
    <Box
      sx={{
        maxWidth: 'wide',
        mx: 'auto',
        px: 3,
      }}
    >
      <Link href="https://github.com/liminoid" variant="nav">
        Github
      </Link>
      <Link href="https://discord.gg/6FdvJka" variant="nav">
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
      <Link href="/contributing" variant="nav">
        Contributing
      </Link>
      <Link href="/colophon" variant="nav">
        Colophon
      </Link>
      <Link href="/citation" variant="nav">
        Citation
      </Link>
    </Box>
  </Box>
);
