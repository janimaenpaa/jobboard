import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import styled from "styled-components";

type FormData = {
  title: string;
  company: string;
  recruiter: string;
  description: string;
  location: string;
  deadline: String;
  requiredTechs: string;
  recommendedTechs: string;
  link: string;
};

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 1200px;
`;

const Form = styled.form`
  width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-top: 10px;
  color: black;
  font-size: 14px;
  font-weight: 400;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 6px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Button = styled.button`
  display: block;
  background: #bf1650;
  color: white;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const NewPost: React.FC = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ title, company, description }) => {
    console.log(title, company, description);
  });

  return (
    <Container>
      <h2>New</h2>
      <Form onSubmit={onSubmit}>
        <div>
          <Label>Job Title</Label>
          <Input name="title" ref={register} />
        </div>
        <div>
          <Label>Company</Label>
          <Input name="company" ref={register} />
        </div>
        <div>
          <Label>Recruiter</Label>
          <Input name="recruiter" ref={register} />
        </div>
        <div>
          <Label>Description</Label>
          <Input name="description" ref={register} />
        </div>
        <div>
          <Label>Location</Label>
          <Input name="location" ref={register} />
        </div>
        <div>
          <Label>Deadline</Label>
          <Input name="deadline" ref={register} />
        </div>
        <div>
          <Label>Required technologies</Label>
          <Input name="requiredTechs" ref={register} />
        </div>
        <div>
          <Label>Recommended technologies</Label>
          <Input name="recommendedTechs" ref={register} />
        </div>
        <div>
          <Label>Link for applying</Label>
          <Input name="applyLink" ref={register} />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default NewPost;
