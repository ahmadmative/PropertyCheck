import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import sidebarImage from '../../assets/inspection/InspectionSidebarImage.png';
import bedroomIcon from '../../assets/Inspection/bedroom.png';
import renovationIcon from '../../assets/Inspection/renovation.png';
import apartmentIcon from '../../assets/Inspection/apartment.png';

const InspectionOverview = () => {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      backgroundColor: '#121212',
      minHeight: '100vh',
      p: 3
    }}>
      <Grid container spacing={3}>
        {/* Left Content Section */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
            INSPECTION OVERVIEW
          </Typography>
          
          <Typography sx={{ color: 'white', mb: 2 }}>
            So, <span>[name]</span>, this is the Overview for your Handover Check.
          </Typography>

          <Typography sx={{ color: 'white', mb: 4 }}>
            In here we've written up the main points for you to consider, and listed the High Priority issues as documented by our Check Heroes.
          </Typography>

          {/* Statistics Boxes - Updated Layout */}
          <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
            <Box sx={{ 
              backgroundColor: '#1E1E1E',
              p: 4,
              borderRadius: 2,
              flex: 1,
              textAlign: 'center'
            }}>
              <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                518
              </Typography>
              <Typography sx={{ color: 'white' }}>Things Noticed</Typography>
            </Box>

            <Box sx={{ 
              backgroundColor: '#f44336',
              p: 4,
              borderRadius: 2,
              flex: 1,
              textAlign: 'center'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1 }}>
                <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
                  79
                </Typography>
                <WarningIcon sx={{ color: 'white', fontSize: '2rem' }} />
              </Box>
              <Typography sx={{ color: 'white' }}>High Priority Issues</Typography>
            </Box>
          </Box>

          {/* Note Section */}
          <Typography sx={{ color: 'white', mb: 4 }}>
            Please note: your Overview section does not discuss the entire Property Check and detailed findings can be found in each section of the Property Report Card. This section only discusses the property on an overall basis and highlights what we see as important things to discuss.
          </Typography>

          <Typography sx={{ color: 'white', mb: 4 }}>
            Overall the property is finished to a high standard, however there are a number of technical and cosmetic issues that need to be addressed.
          </Typography>

          {/* Issues Sections */}
          <Box sx={{ color: 'white' }}>
            {/* A/C Section */}
            <Typography sx={{ color: '#4CAF50', fontWeight: 'bold', mb: 2 }}>
              A/C
            </Typography>
            <Box component="ul" sx={{ mb: 4, pl: 3 }}>
              <li>Leaks detected in ducts</li>
              <li>Ducts need cleaning</li>
              <li>Filters need cleaning</li>
              <li>Substandard duct installation</li>
              <li>Temperature not being achieved at vents</li>
            </Box>

            {/* PLUMBING Section */}
            <Typography sx={{ color: '#4CAF50', fontWeight: 'bold', mb: 2 }}>
              PLUMBING
            </Typography>
            <Box component="ul" sx={{ mb: 4, pl: 3 }}>
              <li>Poor or no water flow in bathroom 6</li>
              <li>Above ceiling piping uses poor materials in areas</li>
            </Box>

            {/* FIXTURES Section */}
            <Typography sx={{ color: '#4CAF50', fontWeight: 'bold', mb: 2 }}>
              FIXTURES
            </Typography>
            <Box component="ul" sx={{ mb: 4, pl: 3 }}>
              <li>Leaks detected in ducts</li>
              <li>Ducts need cleaning</li>
              <li>Filters need cleaning</li>
              <li>Substandard duct installation</li>
              <li>Temperature not being achieved at vents</li>
            </Box>

            {/* TILE & GROUT Section */}
            <Typography sx={{ color: '#4CAF50', fontWeight: 'bold', mb: 2 }}>
              TILE & GROUT
            </Typography>
            <Box component="ul" sx={{ mb: 4, pl: 3 }}>
              <li>Poor or no water flow in bathroom 6</li>
              <li>Above ceiling piping uses poor materials in areas</li>
            </Box>
          </Box>
        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={12} md={4}>
          <Box sx={{ 
            backgroundColor: '#1E1E1E',
            borderRadius: 2,
            overflow: 'hidden'
          }}>
            {/* Sidebar Image */}
            <Box
              component="img"
              src={sidebarImage}
              alt="Property"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                mb: 3
              }}
            />

            <Box sx={{ p: 4 }}>
              {/* Property Details Section */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                    PROPERTY DETAILS
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box component="img" src={renovationIcon} sx={{ width: 24, height: 24 }} />
                    <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>Renovation</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box component="img" src={apartmentIcon} sx={{ width: 24, height: 24 }} />
                    <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>Apartment</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box component="img" src={bedroomIcon} sx={{ width: 24, height: 24 }} />
                    <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>3 Bedrooms</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Property Address Section */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                    PROPERTY ADDRESS
                  </Typography>
                </Box>
                <Typography sx={{ color: 'white', fontSize: '1.1rem', lineHeight: 1.5 }}>
                  1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates
                </Typography>
              </Box>

              {/* Check Details */}
              <Box>
                {/* Checked For Row */}
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                      <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
                        CHECKED FOR
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>
                      Lama Abuzant
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                      <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
                        CHECK NO
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>
                      000865
                    </Typography>
                  </Box>
                </Box>

                {/* Check Date Row */}
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                      <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
                        CHECK DATE
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>
                      12/12/2022
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                      <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
                        CHECK HERO
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>
                      Lama Abuzant
                    </Typography>
                  </Box>
                </Box>

                {/* Verified By Row */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
                      VERIFIED BY
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>
                    Liam Ketley
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InspectionOverview; 