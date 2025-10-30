import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import Box from '@mui/material/Box';

const Testimonio = ({imageUrl, name, country, profession, description}) => {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(like === false ? true : false)
    }

    return (
        <>
            <Card variant="outlined" sx={{width: "500px", "margin-top": "15px"}}>
                <CardContent>
                    <CardMedia 
                        component="img" 
                        image={imageUrl}
                        alt={"Foto de " + name}
                        sx={{width: "100%", heigth: "100%"}}
                    />
                    <Typography variant='h6'>{name}</Typography>
                    <Typography>{profession} en {country}</Typography>
                    <Typography variant='subtitle2'>{description}</Typography>
                    <Box sx={{display: "flex", "justify-content": "start"}}>
                        <IconButton onClick={handleLike}>
                            {like ? <FavoriteIcon sx={{color: "red"}} /> : <FavoriteIcon />}
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}

export default Testimonio;