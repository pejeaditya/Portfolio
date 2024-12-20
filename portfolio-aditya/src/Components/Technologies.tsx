import { Paper, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TpCard from "./TpCard";



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
    <div>
      <Grid container spacing={{xs:2 , lg: 3}}>
        <Grid size={{xs: 6,lg: 4}}>
        <TpCard />
        </Grid>
        <Grid size={{xs: 6,lg: 4}}>
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
        
      </Grid>
    </div>
  );
}
