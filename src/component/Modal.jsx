import React, { useState, useId } from "react";
import { Modal, Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import { Constants } from "../utils/constant";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function UserModal({ open, close, submitForm }) {
  const [userdata, setUserdata] = useState({
    id: useId(),
    name: "",
    email: "",
    role: Constants.user,
  });

  const handleInputs = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={open} onClose={close}>
      <Box sx={style}>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
          textAlign="center"
        >
          Add New User
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          variant="outlined"
          size="small"
          margin="normal"
          onChange={handleInputs}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          size="small"
          margin="normal"
          onChange={handleInputs}
        />

        <TextField
          fullWidth
          select
          label="Role"
          name="role"
          value={userdata.role}
          margin="normal"
          onChange={handleInputs}
        >
          <MenuItem value={Constants.admin}>Admin</MenuItem>
          <MenuItem value={Constants.subadmin}>SubAdmin</MenuItem>
          <MenuItem value={Constants.maintainer}>Maintainer</MenuItem>
          <MenuItem value={Constants.user}>User</MenuItem>
        </TextField>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            py: 1,
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={() => submitForm(userdata)}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
}