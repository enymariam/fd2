import React from "react";
import { Container, Typography } from "@mui/material";
import PositiveCard from "./components/PositiveCard";
import NegativeCard from "./components/NegativeCard";

const App: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
            <Typography
                variant="h1"
                sx={{
                    marginBottom: 4,
                    fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                    textAlign: "center",
                }}
            >
                Sentiments{" "}
            </Typography>
            <PositiveCard></PositiveCard>
            <NegativeCard></NegativeCard>
        </Container>
    );
};

export default App;
