import React from "react";
import { Typography } from "@mui/material";
import Card from "./components/Card";

const App: React.FC = () => {
    return (
        <div className="App">
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
                Sentimental Analysis App{" "}
            </Typography>
            <Card></Card>
        </div>
    );
};

export default App;
