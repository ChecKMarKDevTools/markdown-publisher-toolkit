import { AppBar, Toolbar, Typography } from '@mui/material';
import { Article as ArticleIcon } from '@mui/icons-material';

export default function Header() {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <ArticleIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          Markdown Publisher Toolkit
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Convert dev.to to Coder Legion
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
