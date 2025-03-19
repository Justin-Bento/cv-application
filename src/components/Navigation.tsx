import React from "react";
import { Button, Card, ListItem, Stack, Typography } from "@mui/material";

export default function Navigation() {
  return (
    <Card component="section" sx={{ padding: "1.5rem" }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
        <ListItem>
          <Typography variant="subtitle1">CV Resume</Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="text">Home</Button>
          <Button variant="text">About</Button>
          <Button variant="text">Project</Button>
          <Button variant="text">Blog</Button>
          <Button variant="text">Contact</Button>
        </ListItem>
        <ListItem
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        >
          Item 3
        </ListItem>
      </Stack>
    </Card>
  );
}
