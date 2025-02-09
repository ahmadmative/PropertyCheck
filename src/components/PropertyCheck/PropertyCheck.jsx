import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Typography,
  Paper,
  Grid,
  Chip
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import propertyCheckImage from '../../assets/PropertyCheck/PropertyCheck.png';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  backgroundColor: '#1E1E1E',
  color: 'white',
}));

const StatusChip = styled(Chip)(({ status }) => ({
  borderRadius: '4px',
  padding: '4px 8px',
  backgroundColor: status === 'passed' ? '#4CAF50' : 
                  status === 'failed' ? '#f44336' : 
                  '#ff9800',
  color: 'white',
  '& .MuiChip-label': {
    padding: '8px 12px',
  }
}));

// Dummy data for status sections
const statusData = [
  {
    type: 'passed',
    icon: <CheckCircleIcon />,
    label: 'Passed',
    description: "It's been checked and is in full working order.",
    subText: "Just note, we only show passes for essential things like A/C ducts or the electrical panel (unless otherwise agreed)."
  },
  {
    type: 'failed',
    icon: <ErrorIcon />,
    label: 'Failed',
    description: "It's been checked and it's either not working, broken, not installed correctly, damaged or generally defective.",
    subText: "It's not perfect - which is the standard we abide by - so it can be rectified."
  },
  {
    type: 'high-priority',
    icon: <ErrorIcon />,
    label: 'High Priority',
    description: "A High Priority Fail is an issue we recommend is rectified as a priority.",
    subText: "These are shown in both the Overview section and the chosen category (e.g. the same electrical High Priority Fail will appear in both Overview and Electrics)."
  },
  {
    type: 'at-risk',
    icon: <WarningIcon />,
    label: 'At Risk',
    description: "It's working today, but we're not entirely happy with the installation, finishing or materials.",
    subText: ""
  }
];

// Status Item Component
const StatusItem = ({ data }) => {
  const getStatusColor = (type) => {
    switch(type) {
      case 'passed': return '#4CAF50';
      case 'failed': return '#f44336';
      case 'high-priority': return '#f44336';
      case 'at-risk': return '#ff9800';
      default: return '#4CAF50';
    }
  };

  return (
    <Box sx={{ 
      backgroundColor: '#1E1E1E',
      p: 3,
      borderRadius: 1,
      display: 'flex',
      gap: 3,
      minHeight: '140px',
    }}>
      {/* Status Chip Container */}
      <Box sx={{ 
        backgroundColor: '#121212',
        borderRadius: 1,
        width: '140px',
        alignSelf: 'stretch',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Chip
          icon={data.icon}
          label={data.label}
          sx={{
            backgroundColor: getStatusColor(data.type),
            color: 'white',
            '& .MuiChip-icon': {
              color: 'white'
            },
            borderRadius: '4px',
            height: '32px',
            '& .MuiChip-label': {
              px: 1,
              fontWeight: 'medium'
            }
          }}
        />
      </Box>

      {/* Description Container */}
      <Box sx={{ flex: 1 }}>
        <Typography 
          sx={{ 
            color: 'white',
            fontSize: '1.1rem',
            lineHeight: 1.5,
            mb: data.subText ? 2 : 0
          }}
        >
          {data.description}
        </Typography>
        {data.subText && (
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#888',
              fontSize: '0.875rem',
              lineHeight: 1.5
            }}
          >
            {data.subText}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const PropertyCheck = () => {
  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto', // Enable scrolling
        backgroundColor: '#121212'
      }}
    >
      <Box sx={{ p: 3 }}>  {/* Add padding container */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Left side - Text Content */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ 
                color: 'white',
                fontWeight: 'bold',
                fontSize: '2.5rem',
                mb: 3
              }}
            >
              THE HANDOVER CHECK
            </Typography>
            
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                mb: 2
              }}
            >
              Your Check Hero(es) has carried out this Handover Check with state of the art equipment and our 2.0 CheckTech App.
            </Typography>
            
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                mb: 2
              }}
            >
              Check Heroes utilise their expertise and equipment to carry out a full Check of your entire property (unless we've agreed otherwise) in order to find every issue.
            </Typography>

            <Typography 
              variant="body1"
              sx={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}
            >
              Issues can be found via their expertise, state of the art equipment, or both!
            </Typography>
          </Grid>

          {/* Right side - Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={propertyCheckImage}
              alt="Property Check Illustration"
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: '700px',
                display: 'block',
                margin: 'auto'
              }}
            />
          </Grid>
        </Grid>

        {/* Status Section */}
        <Typography 
          variant="h4" 
          sx={{ 
            mt: 6, 
            mb: 4, 
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          OUR PASS, FAIL AND AT RISK SYSTEM
        </Typography>

        <Grid container spacing={3}>
          {statusData.map((status, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StatusItem data={status} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PropertyCheck; 