import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function ActionAreaCard() {
    return (
        <Card
            sx={{
                maxWidth: 345,
                margin: "auto",
                backgroundColor: "#DDEB9D",
                marginBlock: 2,
            }}
        >
            <CardContent>
                <Typography variant="h5" component="div">
                    Positive
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    "My favourite thing ever"
                </Typography>
            </CardContent>
        </Card>
    );
}
