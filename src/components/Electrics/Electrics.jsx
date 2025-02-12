import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import box1Icon from '../../assets/Electrics/box1.png';
import box2Icon from '../../assets/Electrics/box2.png';
import electricImage from '../../assets/Electrics/ElectricImage1.png';
import ElectricIssueCard from './ElectricIssueCard';
import atRiskIcon from '../../assets/Electrics/atRiskElectrics.png';
import failedIcon from '../../assets/Electrics/failedElectrics.png';
import highPriorityIcon from '../../assets/Electrics/highPriorityElectrics.png';
import passedIcon from '../../assets/Electrics/passedElectrics.png';
import groutKingImage from '../../assets/Electrics/grout.png';

const Electrics = () => {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      backgroundColor: '#1D1D1B',
      minHeight: '100vh',
      p: 3
    }}>
      {/* Header Section */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3
      }}>
        <Box>
          <Typography variant="h4" sx={{ 
            color: 'white', 
            fontWeight: 'bold', 
            mb: 1,
            fontSize: '1.5rem'
          }}>
            ELECTRICS (999)
          </Typography>
          <Typography sx={{ 
            color: 'white', 
            opacity: 0.8,
            fontSize: '1rem'
          }}>
            We inspect every electrical element of the property from the Electrical Panel down to wiring and plug sockets.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex'}}>
          <IconButton sx={{ 
            borderRadius: 1,
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}>
            <Box 
              component="img" 
              src={box1Icon} 
              alt="Grid View" 
              sx={{ width: 35, height: 35 }} 
            />
          </IconButton>
          <IconButton sx={{ 
            borderRadius: 1,
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}>
            <Box 
              component="img" 
              src={box2Icon} 
              alt="List View" 
              sx={{ width: 35, height: 35 }} 
            />
          </IconButton>
        </Box>
      </Box>

      {/* Filter Buttons */}
      <Box sx={{ display: 'flex', gap: 1, mb: 4, alignItems: 'center' }}>
        <Button 
          sx={{ 
            backgroundColor: '#0F0F0F',
            textTransform: 'none',
            borderRadius: 2,
            border: '1px solid white',
            px: 2,
            py: 1,
            '&:hover': { backgroundColor: '#2E2E2E' },
            color: '#ffffff'
          }}
        >
          All (999)
        </Button>
        <Button 
          startIcon={
            <Box 
              component="img" 
              src={highPriorityIcon} 
              alt="High Priority"
              sx={{ width: 20, height: 20 }}
            />
          }
          sx={{ 
            backgroundColor: '#1E1E1E',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            border: '1px solid #ff4444',
            '&:hover': { backgroundColor: '#2E2E2E' },
            color: '#ff4444',
          }}
        >
          High Priority (999)
        </Button>
        <Button 
          startIcon={
            <Box 
              component="img" 
              src={passedIcon} 
              alt="Passed"
              sx={{ width: 20, height: 20 }}
            />
          }
          sx={{ 
            backgroundColor: '#1E1E1E',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            border: '1px solid #4CAF50',
            '&:hover': { backgroundColor: '#2E2E2E' },
            color: '#ffffff',
          }}
        >
          Passed (999)
        </Button>
        <Button 
          startIcon={
            <Box 
              component="img" 
              src={failedIcon} 
              alt="Failed"
              sx={{ width: 20, height: 20 }}
            />
          }
          sx={{ 
            backgroundColor: '#1E1E1E',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            border: '1px solid #ff4444',
            '&:hover': { backgroundColor: '#2E2E2E' },
            color: '#ffffff',
          }}
        >
          Failed (999)
        </Button>
        <Button 
          startIcon={
            <Box 
              component="img" 
              src={atRiskIcon} 
              alt="At Risk"
              sx={{ width: 20, height: 20 }}
            />
          }
          sx={{ 
            backgroundColor: '#1E1E1E',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            border: '1px solid #ff9800',
            '&:hover': { backgroundColor: '#2E2E2E' },
            color: '#ffffff',
          }}
        >
          At Risk (999)
        </Button>
        <Button 
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ 
            backgroundColor: '#383838',
            border: '1px solid #4F4F4F',
            textTransform: 'none',
            borderRadius: 100,
            px: 2,
            py: 1,
            ml: 'auto',
            '&:hover': { backgroundColor: '#2E2E2E' },
            color: '#ffffff'
          }}
        >
          Sub-Category
        </Button>
        <Button 
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ 
            backgroundColor: '#383838',
            border: '1px solid #4F4F4F',
            textTransform: 'none',
            borderRadius: 100,
            px: 2,
            py: 1,
            '&:hover': { backgroundColor: '#2E2E2E' },
            color: '#ffffff'
          }}
        >
          Filter By Room
        </Button>
      </Box>

      {/* High Priority Issues Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
          HIGH PRIORITY ISSUES (999)
        </Typography>
        <Typography sx={{ color: 'white', mb: 3, fontSize: '1rem' }}>
          These are the high priority issues for the Electrics. You'll also see these in their relevent sections, outlined with a red border. They are not new or different issues.
        </Typography>

        {/* Image Grid */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {[1, 2, 3].map((item) => (
            <ElectricIssueCard 
              key={item}
              image={electricImage}
              isHighPriority={true}
            />
          ))}
        </Box>
      </Box>

      {/* Wiring Section */}
      <Box>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
          WIRING (999)
        </Typography>
        <Typography sx={{ color: 'white', mb: 3 }}>
          We look for any faulty, poor quality or improper wiring across the entire property - both ground level and above the ceiling. Only fails will be shown in this section.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {[1, 2, 3].map((item) => (
            <ElectricIssueCard 
              key={item}
              image={electricImage}
              isHighPriority={false}
            />
          ))}
        </Box>
      </Box>

      {/* Recommended Solution Section */}
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'white', 
            fontWeight: 'bold', 
            mb: 2,
            fontSize: '1rem',
            marginTop: '1rem'
          }}
        >
          RECOMMENDED SOLUTION:
        </Typography>

        <Box sx={{ 
          backgroundColor: '#0F0F0F', 
          borderRadius: 2,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          gap: 2
        }}>
          {/* Left Section with Image and Content */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            flex: 1,
            alignItems: 'center',
            minWidth: { xs: '100%', md: 'auto' }
          }}>
            {/* Company Image */}
            <Box
              component="img"
              src={groutKingImage}
              alt="Grout King"
              sx={{ 
                width: 80,
                height: 80,
                borderRadius: 1,
                objectFit: 'cover'
              }}
            />

            {/* Content */}
            <Box sx={{ flex: 1 }}>
              {/* Title and Tag */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 1,
                mb: 1
              }}>
                <Typography sx={{ 
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.25rem'
                }}>
                  Grout King
                </Typography>
                <Box sx={{ 
                  backgroundColor: '#F5F5F5',
                  px: 1.2,
                  py: 0.2,
                  borderRadius: 10,
                  marginLeft: '0.8rem'
                }}>
                  <Typography sx={{ 
                    color: '#008138',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    Removals
                  </Typography>
                </Box>
              </Box>

              {/* Subtitle */}
              <Typography sx={{ 
                color: '#686866',
                fontSize: '0.875rem',
                mb: 0.5
              }}>
                Grout and Tile Solutions
              </Typography>

              {/* Description */}
              <Typography sx={{ 
                color: '#686866',
                fontSize: '0.875rem',
                maxWidth: '600px'
              }}>
                Book grouting work in Dubai with Grout King. Our high-quality grouting services include tile and grout cleaning, restoration, sealing, and more.
              </Typography>
            </Box>
          </Box>

          {/* Visit Website Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#01B750',
              color: 'white',
              textTransform: 'none',
              px: 3,
              py: 1,
              borderRadius: 1,
              whiteSpace: 'nowrap',
              alignSelf: 'center',
              '&:hover': {
                backgroundColor: '#019943'
              },
              width: { xs: '100%', md: 'auto' }
            }}
          >
            Visit Website
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Electrics; 