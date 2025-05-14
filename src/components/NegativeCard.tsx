import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function NegativeCard() {
    return (
        <Card
            sx={{
                maxWidth: 400,
                width: "100%",
                margin: "auto",
                color: "text.primary",
                backgroundColor: "#E55050",
                marginBlock: 2,
            }}
        >
            <CardContent>
                <Typography variant="h5" component="div">
                    Negative
                </Typography>
                <Typography variant="body2" color="text.primary">
                    "I did not enjoy this"
                </Typography>
            </CardContent>
        </Card>
    );
}
