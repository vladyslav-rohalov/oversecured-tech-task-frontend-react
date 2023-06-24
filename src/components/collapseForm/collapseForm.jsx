import { useState } from 'react';
import {
  Container,
  Collapse,
  Button,
  CardContent,
  TextField,
} from '@mui/material';

export default function CollapseForm({ onFormSubmit, isLogin }) {
  const [open, setOpen] = useState(false);

  const handleAddVisitor = e => {
    e.preventDefault();
    const data = {
      firstName: e.target[0].value,
      lastName: e.target[2].value,
    };
    onFormSubmit(data);
    e.target.reset();
    setOpen(false);
  };

  return (
    <>
      {isLogin && (
        <Container maxWidth="xl" style={{ marginTop: '32px' }}>
          <Button variant="contained" onClick={() => setOpen(!open)}>
            Add Visitor
          </Button>
          <div
            style={{
              backgroundColor: 'rgba(211,211,211,0.4)',
            }}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <CardContent>
                <Container
                  sx={{
                    height: 200,
                    lineHeight: 2,
                  }}
                >
                  <form onSubmit={handleAddVisitor}>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      style={{ width: '100%', margin: '16px 0' }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      style={{ width: '100%', marginBottom: '32px' }}
                    />

                    <Button
                      variant="contained"
                      style={{ margin: '0 auto', display: 'block' }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </Container>
              </CardContent>
            </Collapse>
          </div>
        </Container>
      )}
    </>
  );
}
