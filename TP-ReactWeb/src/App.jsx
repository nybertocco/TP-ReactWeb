import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home.jsx";
import SignIn from "./views/signIn/SignIn.jsx";
import SignUp from "./views/signUp/SignUp.jsx";
import Dashboard from "./views/dashboard/Dashboard.jsx";
import Settings from "./views/settings/Settings.jsx";
import Form from "./views/form/Form.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import {
  Alert,
  Avatar,
  Box,
  Card,
  Checkbox,
  Container,
  Fab,
  Grid,
  IconButton,
  Snackbar,
  Switch,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";

export default function App() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/alert" element={<Alert />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/box" element={<Box />} />
      <Route path="/card" element={<Card />} />
      <Route path="/checkbox" element={<Checkbox />} />
      <Route path="/container" element={<Container />} />
      <Route path="/datepicker" element={<DatePicker />} />
      <Route path="/datetimepicker" element={<DateTimePicker />} />
      <Route path="/fab" element={<Fab />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/iconbutton" element={<IconButton />} />
      <Route path="/snackbar" element={<Snackbar />} />
      <Route path="/switch" element={<Switch />} />
      <Route path="/tab" element={<Tab />} />
      <Route path="/textfield" element={<TextField />} />
      <Route path="/typography" element={<Typography />} />

      {/* Rotas privadas */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
      <Route
        path="/form"
        element={
          <PrivateRoute>
            <Form />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
