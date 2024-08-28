import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function HomeHeader() {
  return (
    <Box mt={10}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 16 }}>
          <Box>
            <Typography
              color="#000000"
              fontWeight={"500"}
              fontSize={"112px"}
              lineHeight={"134.4px"}
              letterSpacing={"-4%"}>
              Global money
            </Typography>
            <Box>
              <Box>
                <Box
                  width={"193px"}
                  height={"110px"}
                  bgcolor={"#262626"}
                  borderRadius={"999px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  >
                    
                  </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 16 }}></Grid>
      </Grid>
    </Box>
  );
}
