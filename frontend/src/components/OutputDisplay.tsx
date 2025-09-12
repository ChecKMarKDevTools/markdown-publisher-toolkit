import { useState } from 'react';
import type { ReactNode, SyntheticEvent } from 'react';
import { Paper, Typography, Box, Button, Tooltip, Tabs, Tab, Alert, Snackbar } from '@mui/material';
import {
  ContentCopy as CopyIcon,
  Download as DownloadIcon,
  Visibility as PreviewIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import type { ConversionResult } from '../services/backend-api';

interface OutputDisplayProps {
  result: ConversionResult;
}

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`output-tabpanel-${index}`}
      aria-labelledby={`output-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
};

const OutputDisplay = ({ result }: OutputDisplayProps) => {
  const [tabValue, setTabValue] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  if (!result.success || !result.html) {
    return null;
  }

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result.html!);
      setSnackbarMessage('HTML copied to clipboard!');
      setSnackbarOpen(true);
    } catch (_err) {
      setSnackbarMessage('Failed to copy HTML');
      setSnackbarOpen(true);
    }
  };

  const handleDownload = () => {
    try {
      const blob = new Blob([result.html!], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${result.metadata?.title || 'converted-article'}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setSnackbarMessage('HTML file downloaded!');
      setSnackbarOpen(true);
    } catch (_err) {
      setSnackbarMessage('Failed to download HTML');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Paper elevation={2} sx={{ mt: 3, maxWidth: 800, mx: 'auto', overflow: 'hidden' }}>
      <Box sx={{ p: 3, pb: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h5" component="h3">
            Converted HTML
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Copy HTML to clipboard">
              <Button
                variant="outlined"
                startIcon={<CopyIcon />}
                onClick={handleCopyToClipboard}
                size="small"
              >
                Copy
              </Button>
            </Tooltip>
            <Tooltip title="Download HTML file">
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                size="small"
              >
                Download
              </Button>
            </Tooltip>
          </Box>
        </Box>

        {result.metadata && (
          <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="body2">
              <strong>Title:</strong> {result.metadata.title}
            </Typography>
            <Typography variant="body2">
              <strong>Author:</strong> {result.metadata.author}
            </Typography>
            <Typography variant="body2">
              <strong>Canonical URL:</strong>{' '}
              <a href={result.metadata.canonicalUrl} target="_blank" rel="noopener noreferrer">
                {result.metadata.canonicalUrl}
              </a>
            </Typography>
          </Alert>
        )}

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab
              icon={<PreviewIcon />}
              label="Preview"
              id="output-tab-0"
              aria-controls="output-tabpanel-0"
            />
            <Tab
              icon={<CodeIcon />}
              label="HTML Source"
              id="output-tab-1"
              aria-controls="output-tabpanel-1"
            />
          </Tabs>
        </Box>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Box sx={{ p: 3, maxHeight: '600px', overflow: 'auto' }}>
          <iframe
            srcDoc={result.html}
            style={{
              width: '100%',
              height: '500px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
            }}
            title="Article Preview"
          />
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Box sx={{ p: 3, maxHeight: '600px', overflow: 'auto' }}>
          <pre
            style={{
              backgroundColor: '#f5f5f5',
              padding: '16px',
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: '1.4',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            <code>{result.html}</code>
          </pre>
        </Box>
      </TabPanel>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Paper>
  );
};

export default OutputDisplay;
