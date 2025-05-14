import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function ActionAreaCard() {
    return (
        <Card
            sx={{
                maxWidth: 345,
                margin: "auto",
                backgroundColor: "#f5f5f5",
            }}
        >
            <CardContent>
                <Typography variant="h5" component="div">
                    Analyysi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Käynnistä sentimenttianalyysi ja tarkastele tuloksia.
                </Typography>
            </CardContent>
        </Card>
    );
}
