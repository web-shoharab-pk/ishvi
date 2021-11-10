import React, {Component} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
class ComingSoon extends Component {
    render() {
        return (
            <Card sx={{ minWidth: "100%",minHeight:200,marginTop:10}}>
              <CardContent>
                <Typography sx={{ fontSize: 27,marginTop:6, fontWeight:600 }} color="text.secondary" gutterBottom style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                 Coming Soon
                </Typography>
              </CardContent>
            </Card>
        );
    }
}

export default ComingSoon;