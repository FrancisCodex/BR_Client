import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import instance  from "../../hooks/useRefreshToken";

export default function Contactform() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOpen = () => setOpen((cur) => !cur);

  const handleContact = async () => {
    try {
      const response = await instance.post('/api/contact', { email, message }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      });
      console.log(response.data);
      handleOpen();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} size="lg" className="bg-green-800 add-to-cart rounded-none">Contact Owner</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Contact Owner
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Contact Owner for more information about the property,
              and Discuss the terms and conditions.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" onChange={(e) => setEmail(e.target.value)} />
            <Typography className="-mb-2" variant="h6">
              Message
            </Typography>
            <Input type="textarea" label="Message" size="lg" onChange={(e) => setMessage(e.target.value)} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-green-800" onClick={handleContact} fullWidth>
              Contact
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}