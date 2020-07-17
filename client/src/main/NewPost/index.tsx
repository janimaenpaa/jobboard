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
`;

const NewPost: React.FC = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ title, company, description }) => {
    console.log(title, company, description);
  });

  return (
    <Container>
      <h2>New</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Job Title</label>
          <input name="title" ref={register} />
        </div>
        <div>
          <label>Company</label>
          <input name="company" ref={register} />
        </div>
        <div>
          <label>Recruiter</label>
          <input name="recruiter" ref={register} />
        </div>
        <div>
          <label>Description</label>
          <input name="description" ref={register} />
        </div>
        <div>
          <label>Location</label>
          <input name="location" ref={register} />
        </div>
        <div>
          <label>Deadline</label>
          <input name="deadline" ref={register} />
        </div>
        <div>
          <label>Required technologies</label>
          <input name="requiredTechs" ref={register} />
        </div>
        <div>
          <label>Recommended technologies</label>
          <input name="recommendedTechs" ref={register} />
        </div>
        <div>
          <label>Link for applying</label>
          <input name="applyLink" ref={register} />
        </div>
        <input type="submit" />
      </form>
    </Container>
  );
};

export default NewPost;
