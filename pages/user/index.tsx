import { useEffect, useState } from "react";
import { Box, Typography, Button, TextField, List, ListItem, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import axios from "axios";

const UserDashboard = () => {
    const [user, setUser] = useState<any>(null);
    const [activities, setActivities] = useState<any[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [request, setRequest] = useState("");

    useEffect(() => {
        // Fetch user information (replace with your actual user API endpoint)
        axios
            .get("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });

        // Fetch recent activities (replace with your actual activities API endpoint)
        axios
            .get("https://jsonplaceholder.typicode.com/posts?userId=1")
            .then((response) => {
                setActivities(response.data);
            })
            .catch((error) => {
                console.error("Error fetching activities data:", error);
            });
    }, []);

    const handleRequestOpen = () => {
        setOpenDialog(true);
    };

    const handleRequestClose = () => {
        setOpenDialog(false);
    };

    const handleRequestSubmit = () => {
        console.log("Request submitted:", request);
        // Here you can send the request to the backend API to process
        setOpenDialog(false);
    };

    return (
        <Box sx={{ p: 3 }}>
            {user ? (
                <>
                    <Typography variant="h4">Welcome, {user.name}!</Typography>
                    <Typography variant="h6">Profile Information</Typography>
                    <Typography>Email: {user.email}</Typography>
                    <Typography>Phone: {user.phone}</Typography>
                    <Typography>Job Title: {user.company?.name}</Typography>

                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleRequestOpen}>
                            Submit Request
                        </Button>
                    </Box>

                    <Typography variant="h6" sx={{ mt: 4 }}>
                        Recent Activities
                    </Typography>
                    <List>
                        {activities.map((activity) => (
                            <ListItem key={activity.id}>{activity.title}</ListItem>
                        ))}
                    </List>

                    {/* Request Submission Dialog */}
                    <Dialog open={openDialog} onClose={handleRequestClose}>
                        <DialogTitle>Submit Request</DialogTitle>
                        <DialogContent>
                            <TextField autoFocus margin="dense" label="Your Request" type="text" fullWidth variant="outlined" value={request} onChange={(e) => setRequest(e.target.value)} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleRequestClose}>Cancel</Button>
                            <Button onClick={handleRequestSubmit} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            ) : (
                <Typography>Loading user data...</Typography>
            )}
        </Box>
    );
};

export default UserDashboard;
