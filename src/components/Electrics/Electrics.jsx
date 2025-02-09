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

const Electrics = () => {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      backgroundColor: '#121212',
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
            fontSize: '2rem'
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
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton sx={{ 
            backgroundColor: '#1E1E1E',
            borderRadius: 1,
            padding: '8px',
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}>
            <Box 
              component="img" 
              src={box1Icon} 
              alt="Grid View" 
              sx={{ width: 20, height: 20 }} 
            />
          </IconButton>
          <IconButton sx={{ 
            backgroundColor: '#1E1E1E',
            borderRadius: 1,
            padding: '8px',
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}>
            <Box 
              component="img" 
              src={box2Icon} 
              alt="List View" 
              sx={{ width: 20, height: 20 }} 
            />
          </IconButton>
        </Box>
      </Box>

      {/* Filter Buttons */}
      <Box sx={{ display: 'flex', gap: 1, mb: 4, alignItems: 'center' }}>
        <Button 
          sx={{ 
            backgroundColor: '#1E1E1E',
            color: 'white',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}
        >
          All (999)
        </Button>
        <Button 
          startIcon={<WarningIcon sx={{ color: '#ff4444' }} />}
          sx={{ 
            backgroundColor: '#1E1E1E',
            color: '#ff4444',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            border: '1px solid #ff4444',
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}
        >
          High Priority (999)
        </Button>
        <Button 
          startIcon={<CheckCircleIcon sx={{ color: '#4CAF50' }} />}
          sx={{ 
            backgroundColor: '#1E1E1E',
            color: 'white',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            border: '1px solid #4CAF50',
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}
        >
          Passed (999)
        </Button>
        <Button 
          startIcon={<ErrorIcon sx={{ color: '#ff4444' }} />}
          sx={{ 
            backgroundColor: '#1E1E1E',
            color: 'white',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            border: '1px solid #ff4444',
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}
        >
          Failed (999)
        </Button>
        <Button 
          startIcon={<WarningIcon sx={{ color: '#ff9800' }} />}
          sx={{ 
            backgroundColor: '#1E1E1E',
            color: 'white',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            border: '1px solid #ff9800',
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}
        >
          At Risk (999)
        </Button>
        <Button 
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ 
            backgroundColor: '#1E1E1E',
            color: 'white',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            ml: 'auto',
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}
        >
          Sub-Category
        </Button>
        <Button 
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ 
            backgroundColor: '#1E1E1E',
            color: 'white',
            textTransform: 'none',
            borderRadius: 2,
            px: 2,
            py: 1,
            '&:hover': { backgroundColor: '#2E2E2E' }
          }}
        >
          Filter By Room
        </Button>
      </Box>

      {/* High Priority Issues Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
          HIGH PRIORITY ISSUES (999)
        </Typography>
        <Typography sx={{ color: 'white', mb: 3 }}>
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
        <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
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
    </Box>
  );
};

export default Electrics; 