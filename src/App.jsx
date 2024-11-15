import "./App.css";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import HomeIcon from "@mui/icons-material/Home";

function App() {
    return (
        <>
            <div>Hello World</div>
            <Button variant="contained">Hello world</Button>
            <AccessAlarmIcon />
            <ThreeDRotation />
            <HomeIcon />
            <HomeIcon color="primary" />
            <HomeIcon color="secondary" />
            <HomeIcon color="success" />
            <HomeIcon color="action" />
            <HomeIcon color="disabled" />
            <HomeIcon sx={{ color: pink[500] }} />
        </>
    );
}

export default App;
