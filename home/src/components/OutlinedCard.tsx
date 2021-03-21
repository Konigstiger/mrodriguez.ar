import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ConsumerCard from './ConsumerCard';
import Container from '@material-ui/core/Container';

const endpoint1: string = 'https://localhost:44369/api/weather/now';
const endpoint2: string = 'https://localhost:44369/api/weather/stock';
const endpoint3: string = 'https://jsonplaceholder.typicode.com/posts';
const endpoint4: string = "https://reqres.in/api/users?delay=1";


interface IOutlinedCardProps {
    title: string
    subtitle?: string
    text: string
    endpoint: string
}

const OutlinedCard: React.FC<IOutlinedCardProps> = (props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2" color="textPrimary" gutterBottom>
                    {props.title}
                </Typography>

                <div className="lg:mx-0 flex border-b-2 border-gray-500 opacity-25"></div>
                
                {props.subtitle &&
                    <Typography variant="h6" component="h6" color="textSecondary" gutterBottom>
                        {props.subtitle}
                    </Typography>
                }

                <Typography variant="body2" component="p">
                    {props.text}
                </Typography>

                <Container id="Financial">
                    <ConsumerCard
                        endpoint={endpoint2}>
                    </ConsumerCard>
                </Container>

            </CardContent>

            <CardActions>
                <Button size="small" color="secondary">Refresh</Button>
            </CardActions>
        </Card >
    );
}

export default OutlinedCard

