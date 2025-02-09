import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import thingsToRememberImage from '../../assets/ThingsToRemember/ThingsToRemember1.png';
import thingsToRememberImage2 from '../../assets/ThingsToRemember/ThingsToRemember2.png';
import thingsToRememberImage3 from '../../assets/ThingsToRemember/ThingsToRemember3.png';

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
  },
  {
    text: "Additional box content can go here..." // Example of additional content
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

const ThingsToRemember = () => {
  const [currentIndices, setCurrentIndices] = useState({
    stepOne: 0,
    construction: 0,
    results: 0
  });

  const handleNext = (section) => {
    setCurrentIndices(prev => ({
      ...prev,
      [section]: prev[section] + 1
    }));
  };

  // Helper component for each section
  const Section = ({ title, boxes, currentIndex, section, image }) => (
    <Box sx={{ 
      backgroundColor: '#1E1E1E',
      borderRadius: 1,
      p: 3,
      mb: 3,
      width: '100%'
    }}>
      <Typography 
        variant="h5" 
        sx={{ 
          color: 'white',
          fontWeight: 'bold',
          mb: 3
        }}
      >
        {title}
      </Typography>

      <Box sx={{ 
        display: 'flex',
        gap: 3,
        width: '100%'
      }}>
        <Box
          component="img"
          src={image}
          alt={`${title} Illustration`}
          sx={{
            width: '300px',
            height: 'auto',
            borderRadius: 1,
            flexShrink: 0
          }}
        />

        <Box sx={{ 
          position: 'relative',
          flex: 1,
          overflow: 'hidden',
          minWidth: 0
        }}>
          <Box sx={{ 
            display: 'flex',
            gap: 2,
            transition: 'transform 0.3s ease',
            transform: `translateX(-${currentIndex * (300 + 16)}px)`,
            width: 'fit-content'
          }}>
            {boxes.map((box, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: '#121212',
                  borderRadius: 1,
                  p: 3,
                  width: '300px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                <Typography sx={{ color: 'white' }}>
                  {box.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {currentIndex + 3 < boxes.length && (
            <IconButton 
              onClick={() => handleNext(section)}
              sx={{ 
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)'
                },
                zIndex: 1
              }}
            >
              <ArrowForwardIosIcon sx={{ color: 'white' }} />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ 
      flexGrow: 1, 
      backgroundColor: '#121212',
      height: '100vh',
      overflow: 'auto'
    }}>
      <Box sx={{ p: 3 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            color: 'white',
            fontWeight: 'bold',
            mb: 4
          }}
        >
          THINGS TO REMEMBER
        </Typography>

        <Section 
          title="This Is Step One Of A Handover"
          boxes={stepOneBoxes}
          currentIndex={currentIndices.stepOne}
          section="stepOne"
          image={thingsToRememberImage}
        />

        <Section 
          title="Construction Isn't An Exact Science"
          boxes={constructionBoxes}
          currentIndex={currentIndices.construction}
          section="construction"
          image={thingsToRememberImage2}
        />

        <Section 
          title="Results are the goal, not infinite photos"
          boxes={resultsBoxes}
          currentIndex={currentIndices.results}
          section="results"
          image={thingsToRememberImage3}
        />
      </Box>
    </Box>
  );
};

export default ThingsToRemember; 