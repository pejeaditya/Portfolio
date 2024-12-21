import { Container, Paper, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TpCard from "./TpCard";
import { Padding } from "@mui/icons-material";
import TechnologiesCard from "./TechnologiesCard";




export default function Technologies() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <Container sx={{padding: '30px'}}>
      <Grid container spacing={{xs:2 , lg: 4}}>
        {/* <Grid size={{xs: 6,lg: 4}} >
        <TechnologiesCard />
        </Grid> */}
        {/* <Grid size={{xs: 6,lg: 4}}>
            <TpCard />
        </Grid>
        <Grid size={{xs: 6, lg: 4}}>
        <TpCard />
        </Grid>
        <Grid size={{xs: 6,lg: 4}}>
        <TpCard />
        </Grid>
        <Grid size={{xs: 6,lg: 4}}>
        <TpCard />
        </Grid>
        <Grid size={{xs: 6, lg: 4}}>
        <TpCard />
        </Grid>
         */}
      </Grid>
    </Container>
  );
}
