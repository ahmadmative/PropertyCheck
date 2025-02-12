import React from 'react';
import { Box, Typography } from '@mui/material';
import failedIcon from '../../assets/Electrics/failedIconCard.png';
import highPriorityIcon from '../../assets/Electrics/highPriorityIconCard.png';

const ElectricIssueCard = ({ image, isHighPriority = false }) => {
  return (
    <Box sx={{ 
      position: 'relative',
      border: isHighPriority ? '1px dashed #ff4444' : 'none',
      borderRadius: 2,
      overflow: 'hidden',
      backgroundColor: '#1E1E1E',
      width: { xs: '100%', md: 'auto' }
    }}>
      {/* Status Badges */}
      <Box sx={{ 
        position: 'absolute', 
        top: { xs: 8, md: 16 }, 
        left: { xs: 8, md: 16 }, 
        display: 'flex', 
        gap: { xs: 0.5, md: 1 },
        zIndex: 1
      }}>
        {/* Failed Badge */}
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 1,
          px: { xs: 1, md: 1.5 },
          py: { xs: 0.25, md: 0.5 },
        }}>
          <Box
            component="img"
            src={failedIcon}
            alt="Failed"
            sx={{ 
              width: { xs: 16, md: 20 }, 
              height: { xs: 16, md: 20 } 
            }}
          />
          <Typography sx={{ 
            color: '#ff4444',
            fontWeight: 500,
            fontSize: { xs: '0.7rem', md: '0.875rem' }
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
            px: { xs: 1, md: 1.5 },
            py: { xs: 0.25, md: 0.5 },
          }}>
            <Box
              component="img"
              src={highPriorityIcon}
              alt="High Priority"
              sx={{ 
                width: { xs: 16, md: 20 }, 
                height: { xs: 16, md: 20 } 
              }}
            />
            <Typography sx={{ 
              color: 'white',
              fontWeight: 500,
              fontSize: { xs: '0.7rem', md: '0.875rem' }
            }}>
              High Priority
            </Typography>
          </Box>
        )}
      </Box>

      {/* Image Container */}
      <Box sx={{ position: 'relative' }}>
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

        {/* Kitchen Tag */}
        <Box sx={{ 
          position: 'absolute',
          bottom: { xs: 8, md: 16 },
          right: { xs: 8, md: 16 },
          backgroundColor: '#000000',
          borderRadius: 1,
          px: { xs: 1, md: 1.5 },
          py: { xs: 0.25, md: 0.5 },
        }}>
          <Typography sx={{ 
            color: 'white',
            fontSize: { xs: '0.75rem', md: '0.875rem' },
            fontWeight: 500
          }}>
            Kitchen
          </Typography>
        </Box>
      </Box>

      {/* Issue Description */}
      <Box sx={{ p: { xs: 1.5, md: 2 } }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          mb: 1 
        }}>
          <Box
            component="img"
            src={highPriorityIcon}
            alt="High Priority"
            sx={{ 
              width: { xs: 16, md: 20 }, 
              height: { xs: 16, md: 20 } 
            }}
          />
          <Typography sx={{ 
            color: 'white',
            fontSize: { xs: '0.7rem', md: '0.75rem' },
            fontWeight: 700
          }}>
            Exposed wiring
          </Typography>
        </Box>
        <Typography sx={{ 
          color: '#F5F5F5',
          opacity: 1,
          fontSize: { xs: '0.7rem', md: '0.75rem' }
        }}>
          Junction box left open. FF
        </Typography>
      </Box>
    </Box>
  );
};

export default ElectricIssueCard; 