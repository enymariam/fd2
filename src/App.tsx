import React from "react";
import { Container, Typography } from "@mui/material";
import Card from "./components/Card";

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
                Sentimental Analysis App{" "}
            </Typography>
            <Card></Card>
        </Container>
    );
};

export default App;
