import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Collapse,
  Chip,
  Avatar,
} from '@mui/material';
import { Send as SendIcon, CheckCircle as CheckIcon } from '@mui/icons-material';
import { useDevToConversion } from '../hooks/useDevToConversion';
import OutputDisplay from './OutputDisplay';

const MainForm = () => {
  const [url, setUrl] = useState('');
  const { loading, error, article, result, validateUrl, convertArticle, reset } =
    useDevToConversion();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateUrl(url)) {
      await convertArticle(url);
    }
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (article || result || error) {
      reset();
    }
  };

  return (
    <Box>
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
            onChange={handleUrlChange}
            error={url.length > 0 && !validateUrl(url)}
            helperText={
              url.length > 0 && !validateUrl(url)
                ? 'Please enter a valid dev.to URL (e.g., https://dev.to/username/article-slug)'
                : 'Paste the full URL of the dev.to article you want to convert'
            }
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={!validateUrl(url) || loading}
            startIcon={<SendIcon />}
            sx={{ mb: 2 }}
          >
            {loading ? 'Converting...' : 'Convert Article'}
          </Button>

          {/* Success: Article fetched */}
          <Collapse in={!!article && !error}>
            <Alert severity="success" icon={<CheckIcon />} sx={{ mt: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Article fetched successfully!
              </Typography>
              {article && (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar
                      src={article.user.profile_image_90}
                      alt={article.user.name}
                      sx={{ width: 24, height: 24, mr: 1 }}
                    />
                    <Typography variant="body2">
                      by {article.user.name} (@{article.user.username})
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {article.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {article.tag_list
                      .split(', ')
                      .filter((tag) => tag.trim())
                      .map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                      ))}
                  </Box>
                </Box>
              )}
            </Alert>
          </Collapse>

          {/* Conversion result - failure case */}
          <Collapse in={!!result && !result.success}>
            <Alert severity="warning" sx={{ mt: 2 }} data-testid="conversion-result">
              <Typography>{result?.error || 'Conversion failed'}</Typography>
            </Alert>
          </Collapse>

          {/* Error state */}
          <Collapse in={!!error}>
            <Alert severity="error" sx={{ mt: 2 }} data-testid="conversion-result">
              {error}
            </Alert>
          </Collapse>
        </Box>
      </Paper>

      {/* Success: Show converted output */}
      {result?.success && (
        <Alert severity="success" sx={{ mt: 2 }} data-testid="conversion-result">
          <Typography>Conversion completed successfully!</Typography>
        </Alert>
      )}
      {result?.success && <OutputDisplay result={result} />}
    </Box>
  );
};

export default MainForm;
