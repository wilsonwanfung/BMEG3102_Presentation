import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider
} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#3498db',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
});

interface Term {
  term: string;
  definition: string;
}

const terms: Term[] = [
  {
    term: "Cancer",
    definition: "A disease caused by uncontrolled growth + spread of abnormal cells resulting from genetic and epigenetic alterations."
  },
  {
    term: "Copy Number Gain",
    definition: "An increase in the number of copies of a DNA segment beyond the normal diploid state"
  },
  {
    term: "Molecular Time",
    definition: "Mathematically defined as :   Number of mutations present so far / total number of mutations"
  },
  {
    term: "Driver Mutation",
    definition: "Mutations that promote cancer development (e.g. Oncogenes, Tumor-Suppressor genes)"
  },
  {
    term: "Odd ratio",
    definition: "A measure of association that compares the odds of an event occurring in one group to the odds of it occurring in another group."
  },
  {
    term: "Oncogenesis",
    definition: "The complex, multi-step process by which normal cells turn into cancerous cells, leading to cancer growth in the body."
  },
  {
    term: "Exogenous mutagenic influences",
    definition: "External environmental agents—such as ultraviolet radiation, chemical carcinogens, or viral infections—that cause mutations in DNA."
  },
  {
    term: "APOBEC",
    definition: "A family of cytidine deaminase enzymes that function in innate immunity by editing nucleic acids, but when dysregulated, they can induce characteristic mutations in human DNA."
  },
  {
    term: "Defective mismatch pair",
    definition: "The failure to correct base mispairings during DNA replication, leading to persistent errors and genomic instability."
  },
  {
    term: "Glioblastoma",
    definition: "A highly aggressive, malignant brain tumor that originates from astrocytes, showing rapid growth, marked genetic heterogeneity, and a poor prognosis even with aggressive therapy"
  },
  {
    term: "Melanoma",
    definition: "A malignant tumor arising from melanocytes—the pigment-producing cells of the skin, which is characterized by rapid progression and a high risk of metastasis."
  },
  {
    term: "Anaphase",
    definition: "The stage of cell division during which sister chromatids are separated and pulled towards opposite poles of the cell."
  },
  {
    term: "-CpG-to-TpG transitions",
    definition: "Point mutations in which a methylated cytosine in a CpG dinucleotide is deaminated to thymine, converting the CpG into a TpG."
  },
  {
    term: "Bioinformatics pipeline",
    definition: "A predefined sequence of computational tools and processes that transforms raw biological data, such as genomic sequences, into interpretable, annotated results."
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <Typography
          variant="subtitle2"
          sx={{
            position: 'fixed',
            top: 8,
            right: 8,
            color: '#2c3e50',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
            fontSize: '0.9rem',
            zIndex: 1000
          }}
        >
          BMEG3102 Presentation
        </Typography>
        <Container maxWidth="md">
          <Box sx={{ 
            my: 6,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #2c3e50 30%, #3498db 90%)',
            borderRadius: 3,
            p: 3,
            color: 'white',
            boxShadow: 3
          }}>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                mb: 2
              }}
            >
              Take a look at some useful terms!
            </Typography>
          </Box>
          <List>
            {terms.map((term, index) => (
              <Paper 
                key={index} 
                elevation={2} 
                sx={{ 
                  mb: 3, 
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  }
                }}
              >
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography 
                        variant="h5" 
                        component="div" 
                        sx={{ 
                          fontWeight: 'bold',
                          color: '#2c3e50',
                          mb: 1,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {term.term}
                      </Typography>
                    }
                    secondary={
                      <Typography 
                        variant="body1" 
                        component="div" 
                        sx={{ 
                          color: '#34495e',
                          lineHeight: 1.8,
                          fontSize: '1.1rem'
                        }}
                      >
                        {term.definition}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider sx={{ mx: 2 }} />
              </Paper>
            ))}
          </List>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App; 