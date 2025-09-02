import { useState } from 'react';
import { Paper, TextField, Button, Typography, Box, Alert } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

export default function MainForm() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Placeholder for conversion logic
    setTimeout(() => {
      setLoading(false);
      setError('Conversion engine not yet implemented');
    }, 1000);
  };

  const isValidUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname === 'dev.to';
    } catch {
      return false;
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Convert dev.to Article
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Enter a dev.to article URL to convert it to Coder Legion compatible HTML
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="dev.to Article URL"
          placeholder="https://dev.to/username/article-title"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          error={url.length > 0 && !isValidUrl(url)}
          helperText={
            url.length > 0 && !isValidUrl(url)
              ? 'Please enter a valid dev.to URL'
              : 'Paste the full URL of the dev.to article you want to convert'
          }
          sx={{ mb: 3 }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={!isValidUrl(url) || loading}
          startIcon={<SendIcon />}
          sx={{ mb: 2 }}
        >
          {loading ? 'Converting...' : 'Convert Article'}
        </Button>

        {error && (
          <Alert severity="info" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Box>
    </Paper>
  );
}
