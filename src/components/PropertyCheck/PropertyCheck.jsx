import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Typography,
  Paper,
  Grid,
  Chip
} from '@mui/material';
import propertyCheckImage from '../../assets/PropertyCheck/PropertyCheck.png';
import futureProofingImage from '../../assets/PropertyCheck/futureProofing.png';
import starIcon from '../../assets/PropertyCheck/star.png';
import passedIcon from '../../assets/PropertyCheck/passed.png';
import highRiskIcon from '../../assets/PropertyCheck/failed.png';
import failedIcon from '../../assets/PropertyCheck/highPriority.png';
import atRiskIcon from '../../assets/PropertyCheck/atRisk.png';
import '../../assets/fonts/fonts.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  backgroundColor: '#1E1E1E',
  color: 'white',
  fontFamily: 'Gotham Book, sans-serif',
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

// Update the status data
const statusData = [
  {
    type: 'passed',
    icon: passedIcon,
    label: 'Passed',
    labelColor: '#009540', // Color for "Passed" text
    textColor: '#ffffff', // Color for description text
    description: "It's been checked and is in full working order.",
    subText: "Just note, we only show passes for essential things like A/C ducts or the electrical panel (unless otherwise agreed)."
  },
  {
    type: 'failed',
    icon: failedIcon,
    label: 'Failed',
    labelColor: '#9B1C1C', // Color for "Failed" text
    textColor: '#ffffff', // Color for description text
    description: "It's been checked and it's either not working, broken, not installed correctly, damaged or generally defective.",
    subText: "It's not perfect - which is the standard we abide by - so it can be rectified."
  },
  {
    type: 'high-priority',
    icon: highRiskIcon,
    label: 'High Priority',
    labelColor: '#F5F5F5', // Color for "High Priority" text
    textColor: '#ffffff', // Color for description text
    description: "A High Priority Fail is an issue we recommend is rectified as a priority.",
    subText: "These are shown in both the Overview section and the chosen category (e.g. the same electrical High Priority Fail will appear in both Overview and Electrics)."
  },
  {
    type: 'at-risk',
    icon: atRiskIcon,
    label: 'At Risk',
    labelColor: '#FF8800', // Color for "At Risk" text
    textColor: '#ffffff', // Color for description text
    description: "It's working today, but we're not entirely happy with the installation, finishing or materials.",
    subText: ""
  }
];

// Update the StatusItem component
const StatusItem = ({ data }) => {
  const getStatusColor = (type) => {
    switch(type) {
      case 'passed': return '#D6FFE7';
      case 'failed': return '#FDE8E8';
      case 'high-priority': return '#EF4444';
      case 'at-risk': return '#FFDDB7';
      default: return '#4CAF50';
    }
  };

  return (
    <Box sx={{ 
      backgroundColor: '#1E1E1E',
      p: { xs: 2, md: 3 },
      borderRadius: 1,
      height: '100%',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'center', md: 'flex-start' },
      gap: { xs: 2, md: 3 },
      fontFamily: 'Gotham Book, sans-serif',
    }}>
      {/* Status Chip Container */}
      <Box sx={{ 
        backgroundColor: '#121212',
        borderRadius: 1,
        width: { xs: '140px', md: '140px' },
        minWidth: { xs: '140px', md: '140px' },
        height: { xs: '65px', md: '140px' },
        minHeight: { xs: '60px', md: '140px' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          backgroundColor: getStatusColor(data.type),
          padding: { xs: '4px 10px', md: '6px 12px' },
          borderRadius: '4px',
        }}>
          <Box
            component="img"
            src={data.icon}
            alt={`${data.label} icon`}
            sx={{
              width: { xs: 18, md: 20 },
              height: { xs: 18, md: 20 },
              objectFit: 'contain'
            }}
          />
          <Typography
            sx={{
              color: data.labelColor,
              fontWeight: 500,
              fontSize: { xs: '0.8125rem', md: '0.875rem' },
              fontFamily: 'Gotham Book, sans-serif',
            }}
          >
            {data.label}
          </Typography>
        </Box>
      </Box>

      {/* Description Container */}
      <Box sx={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: { xs: 'center', md: 'left' },
      }}>
        <Typography 
          sx={{ 
            color: '#ffffff',
            fontSize: { xs: '0.9375rem', md: '1rem' },
            lineHeight: 1.5,
            mb: data.subText ? 2 : 0,
            flex: 1,
            fontFamily: 'Gotham Book, sans-serif',
          }}
        >
          {data.description}
        </Typography>
        {data.subText && (
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#ffffff',
              fontSize: { xs: '0.9375rem', md: '1rem' },
              lineHeight: 1.5,
              fontFamily: 'Gotham Book, sans-serif',
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
        backgroundColor: '#121212',
        fontFamily: 'Gotham Book, sans-serif',
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
                fontSize: '1.375rem',
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
                fontSize: '1rem',
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
                fontSize: '1rem',
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
                fontSize: '1rem',
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
            fontWeight: 'bold',
            fontSize: '1.375rem',
       

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

        {/* Add the Future-Proofing section after the status grid */}
        <Box sx={{ p: 3, mt: 6 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left side - Image */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={futureProofingImage}
                alt="Future Proofing Illustration"
                sx={{
                  width: '100%',
                  maxWidth: '298px',
                  height: 'auto',
                  display: 'block',
                  margin: 'auto'
                }}
              />
            </Grid>

            {/* Right side - Content */}
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: '1.375rem',
               
                }}
              
              >
                FUTURE-PROOFING
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'white',
                  fontSize: '1rem',
                  lineHeight: 1,
                  mb: 2
                }}
              >
                We don't just look at today - we look at the future, too.
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'white',
                  fontSize: '1rem',
                  lineHeight: 1,
                  mb: 3
                }}
              >
                If we don't think something will last three years (we think that's is a fair amount of time for something to last with little or no issues) then we'll flag it.
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'white',
                  fontSize: '1rem',
                  lineHeight: 1,
                  mb: 4
                }}
              >
                Just remember: we can't predict the future. It depends on usage and other variables.
              </Typography>

              {/* "If you can't see something" box */}
              <Box sx={{ 
                backgroundColor: '#1E1E1E',
                borderRadius: 2,
                p: 3,
                display: 'flex',
                gap: 3,
                alignItems: 'center',
              }}>
                <Box
                  component="img"
                  src={starIcon}
                  alt="Star Icon"
                  sx={{
                    width: 32,
                    height: 32,
                    flexShrink: 0,
                  }}
                />
                <Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white',
                      fontWeight: 'bold',
                      mb: 1,
                      textTransform: 'uppercase',
                      letterSpacing: '1.375px'
                    }}
                  >
                    IF YOU CAN'T SEE SOMETHING, THAT'S GOOD!
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'white',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      mb: 2
                    }}
                  >
                    If something isn't in here, it doesn't mean it's not been looked at, quite the opposite. It means it's been checked (unless otherwise agreed) for every possible issue and is good to go.
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'white',
                      fontSize: '1rem',
                      lineHeight: 1.6
                    }}
                  >
                    Put it this way: an emptier Property Report Card is a better Property Report Card.
                  </Typography>
                </Box>
              </Box>

            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyCheck; 