import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import thingsToRememberImage from '../../assets/ThingsToRemember/ThingsToRemember1.png';
import thingsToRememberImage2 from '../../assets/ThingsToRemember/ThingsToRemember2.png';
import thingsToRememberImage3 from '../../assets/ThingsToRemember/ThingsToRemember3.png';
import checkIcon from '../../assets/ThingsToRemember/Check.png';

// Dummy data for the boxes
const stepOneBoxes = [
  {
    text: "If you're about to hyperventilate because of the number of issues in this Property Report Card, there's absolutely no need to."
  },
  {
    text: "This is your first Check since your property's been handed over and there are going to be lots of things in here. We're very thorough, remember."
  },
  {
    text: "Think of it this way - you'd never publish the first draft of a book, you'd have someone proofread it and then someone edit it before it's released. The same applies here - think of it as fixing the typos and grammatical errors."
  }
];

const constructionBoxes = [
  {
    text: "Things can change, even overnight."
  },
  {
    text: "Cracks can appear, leaks can spring up. This is especially true when you have contractors in and out between Checks - by fixing A they can create problem B."
  },
  {
    text: "If anything like this happens, please drop us a WhatsApp. We'll get to the bottom of it for you."
  }
];

const resultsBoxes = [
  {
    text: "We document things in your Property Report Card in order to get results from the developer."
  },
  {
    text: "Some prefer a single photo rather than multiple (e.g. an entire door needs replacing, so one photo is sufficient for it to be replaced), and in some cases we'll upload various detailed photos for reference."
  },
  {
    text: "We'll walk you through this process on your aftercare call, but if you have any questions beforehand, we're here."
  }
];

const Section = ({ title, boxes, section, image }) => (
  <Box sx={{ 
    backgroundColor: '#000000',
    borderRadius: 1,
    p: { xs: 2, md: 3 },
    mb: 3,
    width: '100%'
  }}>
    <Typography 
      variant="h6" 
      sx={{ 
        color: 'white',
        fontWeight: 'bold',
        mb: 3,
        fontSize: { xs: '1.375rem', md: '1.5rem' }
      }}
    >
      {title}
    </Typography>

    <Box sx={{ 
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 3,
      width: '100%'
    }}>
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={`${title} Illustration`}
        sx={{
          width: { xs: '100%', md: '300px' },
          maxWidth: { xs: '300px', md: '300px' },
          height: 'auto',
          borderRadius: 1,
          flexShrink: 0,
          margin: { xs: '0 auto', md: 0 }
        }}
      />

      {/* Grid of boxes */}
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        gap: 2,
        flex: 1
      }}>
        {boxes.map((box, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#1E1E1E',
              borderRadius: 1,
              p: { xs: 2, md: 2.5 },
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              height: '100%'
            }}
          >
            <Box
              component="img"
              src={checkIcon}
              alt="Check Icon"
              sx={{
                width: 24,
                height: 24,
                objectFit: 'contain'
              }}
            />
            <Typography sx={{ 
              color: 'white',
              fontSize: { xs: '1rem', md: '0.9rem' },
              lineHeight: 1.6
            }}>
              {box.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

const ThingsToRemember = () => {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      backgroundColor: '#1D1D1B',
      minHeight: '100vh',
      p: { xs: 2, md: 3 }
    }}>
      <Typography 
        variant="h4" 
        sx={{ 
          color: 'white',
          fontWeight: 'bold',
          mb: 4,
          fontSize: { xs: '1.5rem', md: '2rem' }
        }}
      >
        THINGS TO REMEMBER
      </Typography>

      <Section 
        title="This Is Step One Of A Handover"
        boxes={stepOneBoxes}
        section="stepOne"
        image={thingsToRememberImage}
      />

      <Section 
        title="Construction Isn't An Exact Science"
        boxes={constructionBoxes}
        section="construction"
        image={thingsToRememberImage2}
      />

      <Section 
        title="Results are the goal, not infinite photos"
        boxes={resultsBoxes}
        section="results"
        image={thingsToRememberImage3}
      />

      {/* Add the "and most importantly..." section */}
      <Box sx={{ 
        mt: 6, 
        mb: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}>
        <Typography 
          sx={{ 
            color: '#4CAF50',
            fontSize: { xs: '1.125rem', md: '1.25rem' },
            fontWeight: 500
          }}
        >
          and most importantly...
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ 
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: '1.375rem', md: '1.5rem' }
          }}
        >
          We're Here To Help, Always
        </Typography>

        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          <Typography 
            sx={{ 
              color: 'white',
              fontSize: '1rem',
              lineHeight: 1.6
            }}
          >
            • This is a collaborative effort between you, the developer, and Property Check. We're always, always on your side.
          </Typography>
          <Typography 
            sx={{ 
              color: 'white',
              fontSize: '1rem',
              lineHeight: 1.6
            }}
          >
            • Any clarifications, questions, issues, confusion, call us right away and we'll work on it together with you.
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          mt: 4,
          gap: 2
        }}>
          <Box
            component="button"
            sx={{
              backgroundColor: '#1E8E3E',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 24px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 500,
              width: '200px',
              '&:hover': {
                backgroundColor: '#167F3D',
              }
            }}
          >
            Previous
          </Box>
          <Box
            component="button"
            sx={{
              backgroundColor: '#1E8E3E',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 24px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 500,
              width: '200px',
              '&:hover': {
                backgroundColor: '#167F3D',
              }
            }}
          >
            Next
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThingsToRemember; 