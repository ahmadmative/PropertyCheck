import React from 'react';
import { Box, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';

const ElectricIssueCard = ({ image, isHighPriority = false }) => {
  return (
    <Box sx={{ 
      position: 'relative',
      border: isHighPriority ? '1px dashed #ff4444' : 'none',
      borderRadius: 2,
      overflow: 'hidden',
      backgroundColor: '#1E1E1E'
    }}>
      {/* Status Badges */}
      <Box sx={{ 
        position: 'absolute', 
        top: 16, 
        left: 16, 
        display: 'flex', 
        gap: 1,
        zIndex: 1
      }}>
        {/* Failed Badge */}
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 1,
          px: 1.5,
          py: 0.5,
        }}>
          <CancelIcon sx={{ color: '#ff4444', fontSize: 20 }} />
          <Typography sx={{ 
            color: '#ff4444',
            fontWeight: 500,
            fontSize: '0.875rem'
          }}>
            Failed
          </Typography>
        </Box>

        {/* High Priority Badge */}
        {isHighPriority && (
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            backgroundColor: '#ff4444',
            borderRadius: 1,
            px: 1.5,
            py: 0.5,
          }}>
            <WarningIcon sx={{ color: 'white', fontSize: 20 }} />
            <Typography sx={{ 
              color: 'white',
              fontWeight: 500,
              fontSize: '0.875rem'
            }}>
              High Priority
            </Typography>
          </Box>
        )}
      </Box>

      {/* Main Image */}
      <Box
        component="img"
        src={image}
        alt="Electric Issue"
        sx={{ 
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
      />

      {/* Room Label */}
      <Box sx={{ 
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#000000',
        borderRadius: 1,
        px: 1.5,
        py: 0.5,
      }}>
        <Typography sx={{ 
          color: 'white',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
          Kitchen
        </Typography>
      </Box>

      {/* Issue Description */}
      <Box sx={{ p: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          mb: 1 
        }}>
          <WarningIcon sx={{ color: '#ff9800' }} />
          <Typography sx={{ 
            color: 'white',
            fontSize: '1rem'
          }}>
            Exposed wiring
          </Typography>
        </Box>
        <Typography sx={{ 
          color: 'white',
          opacity: 0.8,
          fontSize: '0.875rem'
        }}>
          Junction box left open. FF
        </Typography>
      </Box>
    </Box>
  );
};

export default ElectricIssueCard; 