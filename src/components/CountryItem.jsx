import React, { useState, useRef, useEffect } from 'react'

import {
  ListItem,
  Fade,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material'
import { Link } from 'react-router-dom';

export function CountryItem({ data, children }) {
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (hovered && cardRef.current) {
      const result =
        window.innerHeight -
        cardRef.current.getBoundingClientRect().bottom -
        12;
      if (result < 0) {
        setOffset(result);
      }
    } else {
      setOffset(0);
    }
  }, [hovered]);
  return (
    <ListItem
      sx={{
        whiteSpace: "pre",
        borderBottom: "1px solid #e5e5e5",
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {children}
      {hovered && (
        <Fade in timeout={400}>
          <Card
            ref={cardRef}
            elevation={4}
            sx={{
              position: "absolute",
              top: 0,
              left: "100%",
              width: 200,
              transform: `translateY(${offset}px)`,
            }}
          >
            <CardMedia
              component="img"
              height="100"
              image={data.flags.png}
              alt={data.flags.alt}
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.region}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ whiteSpace: "wrap" }}
              >
                {data.name.common}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/country/${data.cca2}`}>
                <Button size="small">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Fade>
      )}
    </ListItem>
  );
}